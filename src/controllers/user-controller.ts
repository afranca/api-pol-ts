import { RequestHandler } from "express";
import { RequestBody } from "../models/request-body";
import { User } from "../models/users";
import { UserType } from "../models/users";

const USERS: User[] = [];

export const createUser: RequestHandler = (req, res, next ) => {
    
    const name = (req.body as RequestBody).name;
    const age = (req.body as RequestBody).age;
    const role = (req.body as RequestBody).role;
    const occupation = (req.body as RequestBody).occupation;

    let type: UserType;
    if (role && occupation ){
        type = UserType.poweruser;  
    } else if (role){
        type = UserType.admin;  
    } else if (occupation){
        type = UserType.employee;  
    } else {
        throw new Error('Missing both, role and occupation fields');
    }
    


   const newUser =  new User(
                        Math.random().toString(),
                        type,
                        name,
                        age,
                        role,
                        occupation
                    );

   // Storing item (memory, database, queue, etc)
   USERS.push(newUser);

    //Sending response
    res.status(201).json({message:'Successfully created.', entry: newUser});
};

export const getUsers: RequestHandler = (req, res, next) =>{
    res.status(201).json({Users: USERS});
};

export const updateUser: RequestHandler<{id: string}> = (req, res, next) =>{

    //Sending response
    //res.status(201).json({message:'Successfully updated.'});
};

export const deleteUser: RequestHandler<{id: string}> = (req, res, next) =>{

    //Sending response
    //res.status(201).json({message:'Successfully deleted.'});
};