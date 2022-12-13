import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Admin, Employee, UserType } from "../models/users";

@Entity()
export class User implements Admin,Employee {
    @PrimaryGeneratedColumn()
    id!: number; 

    @Column()
    type!: UserType;

    @Column()
    name!: string;

    @Column()
    age!: number;

    @Column()
    role?: string;

    @Column()
    occupation?: string;    

}