import { APIRequestContext, BrowserContext, Page, request } from "@playwright/test";
import User from "../models/User";
import UserAPI from "../apis/UserApi";
import Config from '../playwright.config';

export default class RegisterPage {
    private page:Page;
    private request?:APIRequestContext;
    private context?:BrowserContext;
    //constructor
    constructor(page:Page, request?:APIRequestContext, context?:BrowserContext){
        this.page = page;
        this.request = request;
        this.context = context;
    }

    // Elements
    private get firstNameInput() {
    return '[data-testid="first-name"]';
    }

    private get lastNameInput() {
    return '[data-testid="last-name"]';
    }

    private get emailInput() {
    return '[data-testid="email"]';
    }

    private get passwordInput() {
    return '[data-testid="password"]';
    }

    private get confirmPasswordInput() {
    return '[data-testid="confirm-password"]';
    }

    private get submitButton() {
    return '[data-testid="submit"]';
    }
    // Methods 
    async load(){
        await this.page.goto("/signup");
    }
    async register(user:User){
    await this.page.type(this.firstNameInput, user.getFirstName());
    await this.page.type(this.lastNameInput, user.getLastName());
    await this.page.type(this.emailInput, user.getEmail());
    await this.page.type(this.passwordInput, user.getPassword());
    await this.page.type(this.confirmPasswordInput, user.getPassword());
    await this.page.click(this.submitButton);
    }

    async registerUsingApi(user:User){
        //Register using the API
        const response = await new UserAPI(this.request!).regsiter(user);

        const responseBody = await response.json();
        const accessToken = responseBody.accessToken;
        const userID = responseBody.userID;
        const firstName = responseBody.firstName;

        await this.context!.addCookies([
            {
                name: "access_token",
                value: accessToken,
                url: 'config.use.baseURL',
            },
            {
                name: "firstName",
                value: firstName,
                url: 'config.use.baseURL',
            },
            {
                name: "userID",
                value: userID,
                url: 'config.use.baseURL',
            },
        ]);
    }
}