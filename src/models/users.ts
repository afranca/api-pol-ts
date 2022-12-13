// UserType for Users
export enum UserType {
    admin = 'admin',
    employee = 'employee',
    poweruser = 'poweruser'
}

interface BaseUser {
    id: number;
    type: UserType;
    name: string;
    age: number;
}

export interface Admin extends BaseUser{
    role?: string;
}

export interface Employee {
    occupation?: string;
}

interface PowerUser extends Admin, Employee{}
//export type PowerUser = Admin & Employee;

//export type User = Admin | Employee | PowerUser;