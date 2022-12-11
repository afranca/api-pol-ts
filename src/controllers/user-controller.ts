import { RequestHandler } from "express";
import { RequestBody } from "../models/request-body";
import { User } from "../models/users";
import { UserType } from "../models/users";
import { defineUserType } from "../utils/type-util";

const USERS: User[] = [];

export const createUser: RequestHandler = (req, res, next ) => {
    
    const name = (req.body as RequestBody).name;
    const age = (req.body as RequestBody).age;
    const role = (req.body as RequestBody).role;
    const occupation = (req.body as RequestBody).occupation;

    const type: UserType = defineUserType(role,occupation);


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

//Needs to implement filering
export const getUsers: RequestHandler = (req, res, next) =>{
    // Grabbing id from parameters    
    const age =  req.query.age;
    const role = req.query.role;
    //const occupation = req.params.occupation;
    //const type = req.params.type //: UserType = defineUserType(role,occupation); 

    console.log(age);
    console.log(role);
    //console.log(occupation);
    //console.log(type);

    let tmpUsers: User[] = USERS;
    if (age){
        let ageNumb = +age;
        tmpUsers = tmpUsers.filter( (user) => user.age === ageNumb);
    }
    if (role){
        tmpUsers = tmpUsers.filter( (user) => user.role === role);
    }
    /*
    if (type){
        //tmpUsers = USERS.filter( (user) => user.role === role);
    }    
    if (occupation){
        tmpUsers = USERS.filter( (user) => user.occupation === occupation);
    } 
    */           
    
    res.status(201).json({Users: tmpUsers});  
};

export const updateUser: RequestHandler<{id: string}> = (req, res, next) =>{

    //Sending response
    //res.status(201).json({message:'Successfully updated.'});
};

export const deleteUser: RequestHandler<{id: string}> = (req, res, next) =>{

    //Sending response
    //res.status(201).json({message:'Successfully deleted.'});
};