interface Admin {
    id: number;
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

interface Employee {
    id: number;
    type: 'employee';
    name: string;
    age: number;
    occupation: string;
}

//interface PowerUser extends Admin, Employee{}
export type PowerUser = Admin & Employee;

export type User = Admin | Employee | PowerUser;

