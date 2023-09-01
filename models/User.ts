import { faker } from "@faker-js/faker";

export default class User {
setAccesstoken(accessToken: any) {
    throw new Error('Method not implemented.');
}
private firstName:string;
private lastName:string;
private email:string;
private password:string;
private access_token:string;
private userID:string;

constructor() {
    this.firstName = faker.person.firstName();
    this.lastName = faker.person.lastName();
    this.email = faker.internet.email();
    this.password = '1234AZER';
}
getFirstName(){
    return this.firstName;
}
getLastName(){
    return this.lastName;
}
getEmail(){
    return this.email;
}
getPassword(){
    return this.password;
}
setAccess_token(access_token:string){
    return this.access_token;
}
}