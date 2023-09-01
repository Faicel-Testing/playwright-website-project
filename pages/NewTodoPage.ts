import { APIRequestContext, Page } from "@playwright/test";
import TodoApi from "../apis/TodoApi";
import User from "../models/User";

export default class NewTodoPge{
   private page:Page;
   private request?:APIRequestContext;
   constructor(page:Page,request?:APIRequestContext){
   this.page = page;
   this.request = request;
   }
   private get newTodoInput(){
        return '[data-testid="new-todo"]'
    }

   private get  newTodoSubmit(){
        return '[data-testid="submit-newTask"]'
   }

   async load(){
    await this.page.goto("/todo/new");
   }

   async getaddTodusingApi(user:User){
    return await new TodoApi(this.request!).addTdo(user);
   }
}