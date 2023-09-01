import { APIRequestContext, Page, expect } from "@playwright/test";
import User from "../models/User";

export default class TodoPage {
    private page:Page;
    constructor(page:Page){
        this.page=page;
    }
    private get welcomeMessage(){
        return '[data-testid="welcome"]';
    }
    getwlecomeMessage(){
        return this.page.locator('[data-testid="welcome"]');
    }

    private get todoItem(){
        return '[data-testid="todo-text"]';
    }

    async getTodoText(index:number){
       return await this.page.locator(this.todoItem).nth(index).innerText();
    }

    async load(){
        return await this.page.goto("/todo"); 
    }
    
    private getclickDeleteButton(){
        return '[data-testid="delete"]';
    }
    async deleteButtonClick(index:number){
        return await this.page.locator(this.getclickDeleteButton()).nth(index);
    }
    private getDisplayedMessage(){
        return '[data-testid="no-todos"]';
    }
    getNotTodoMessage(){
        return this.page.locator(this.getDisplayedMessage());
    }
    
}

