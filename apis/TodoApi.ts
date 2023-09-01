import { APIRequestContext } from "@playwright/test";
import User from "../models/User";

export default class TodoApi {
    private request:APIRequestContext;
    constructor(request:APIRequestContext){
        this.request = request;
    }
    async addTdo(user: User){
        return await this.request.post('api/v1/register', {
            data: 
                {
                    isCompleted: false,
                    item: "Plawright"
                },
                headers: {
                    Authorization: 'Bearer ${accessToken}',
                },
        });
    
}
}