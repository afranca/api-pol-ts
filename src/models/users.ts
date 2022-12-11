// UserType for Users
export enum UserType {
    admin = 'admin',
    employee = 'employee',
    poweruser = 'poweruser'
}

interface BaseUser {
    id: string;
    type: UserType;
    name: string;
    age: number;
}

interface Admin extends BaseUser{
    role?: string;
}

interface Employee {
    occupation?: string;
}

interface PowerUser extends Admin, Employee{}
//export type PowerUser = Admin & Employee;

//export type User = Admin | Employee | PowerUser;
export class User implements Admin,Employee {
    constructor(
        public id: string, 
        public type: UserType,
        public name: string,
        public age: number,
        public role?: string,
        public occupation?: string
    ){   }

}

