import { User } from "./DataModels/UserData";


export class DataSource{
    constructor(){

    }

    static userList:User[]=[]

    static setUser(data)
    {
        this.userList.push(data);

        console.table(this.userList);
    }

    static getUserList()
    {
        return this.userList;
    }
}