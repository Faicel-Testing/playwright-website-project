import {expect, test} from '@playwright/test';
import User from '../models/User';
import RegisterPage from '../pages/RegisterPage';
import NewTodoPge from '../pages/NewTodoPage';
import TodoPage from '../pages/TodoPage';
test("should be able to add a todo", async function ({ page, request, context }) {
    const user = new User();
        //Register using the API
        const registerPage = new RegisterPage(page, request, context);
        await registerPage.registerUsingApi(user);

        // console.log(accessToken, userID, firstName);
        const newTodoPage = new NewTodoPge(page);
        await newTodoPage.load();
        await page.type('newTodoInput()', "Playwright");
        await page.click('newTodoSubmit()');
        //const todotextMessage = page.locator('[data-testid="todo-text"]').nth(0);
        const todoPage = new TodoPage(page);
        const gettodoText = await todoPage.getTodoText(0);
        //await expect(todotextMessage).toBeVisible();
    })
test("should be able to delete todo", async({page, request, context})=>{
    const user = new User();

const registerPage = new RegisterPage(page, request, context);
await registerPage.registerUsingApi(user);

//Add Todo using the API
//await new TodoApi(request).addTdo(user);
const newTodoPage = new NewTodoPge(page, request);
await newTodoPage.getaddTodusingApi(user);
const todoPage = new TodoPage(page);
await todoPage.load();
// await page.click('[data-testid="add"]');
// await page.type('[data-testid="new-todo"]',"Playwright");
// await page.click('[data-testid="submit-newTask"]');
await page.click('[data-testid="delete"]');
await todoPage.deleteButtonClick(0);
const notodosMessage = todoPage.getNotTodoMessage();
await expect(notodosMessage).toBeVisible();
})
