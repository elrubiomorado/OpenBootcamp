import {STATUS } from "./status.enum";

export class Contact {
    name = "";
    surname = "";
    email = "";
    status = STATUS.ONLINE;


    constructor(name, surname, email, status){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.status = status;
    }
}