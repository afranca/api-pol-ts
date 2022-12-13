import { RequestHandler } from "express";
import { RequestBody } from "../models/request-body";
import { User } from "../entity/User";
import { UserType } from "../models/users";
import { deriveUserType } from "../utils/type-util";
import { AppDataSource } from "../data-source";


/* ************************************ */
/* * Repository                         */
/* ************************************ */
const USERS: User[] = [];


/* ************************************ */
/* * Create User                        */
/* ************************************ */
export const createUser: RequestHandler = (req, res, next ) => {
    
    const name = (req.body as RequestBody).name;
    const age = (req.body as RequestBody).age;
    const role = (req.body as RequestBody).role;
    const occupation = (req.body as RequestBody).occupation;
    const type: UserType = deriveUserType(role,occupation);

    
    AppDataSource.initialize().then(async () => { 
        const user =  new User();
        //user.id = Math.floor(Math.random() * 1000);
        user.type = type;
        user.name = name;
        user.age = age;
        user.occupation = occupation;
        user.role = role;

        // Storing item (memory, database, queue, etc)
        await AppDataSource.manager.save(user)
        console.log("Saved a new user with id: " + user.id)     
        USERS.push(user);

        console.log("Loading users from the database...");
        const users = await AppDataSource.manager.find(User);
        console.log("Loaded users: ", users);
     
        //Sending response
        res.status(201).json({message:'Successfully created.', entry: user});

    }).catch(error => { 
        console.log(error)
        res.status(500).json({message: error});
        // Closing connection to Database
        AppDataSource.destroy()         
    }).then( async () => {        
        // Closing connection to Database
        AppDataSource.destroy()         
    })

};

/* ************************************ */
/* * Get User by Id                     */
/* ************************************ */
export const getUser: RequestHandler<{id: string}> = (req, res, next) =>{
    // Grabbing url from parameters    
    const id =  +req.params.id;

    AppDataSource.initialize().then(async (connection) => { 

        // Obtain repository
        let userRepository = connection.getRepository(User);

        // Not sure why it cant find the 'FindOneOptions' type 
        /* const findOptions: FindOneOptions  = {  */
        const findOptions = {
            where: {
              id: id          
            }
          }
           
        // Perform query  
        let user = await userRepository.findOne(findOptions);  
        
        //Send response
        if (user){
            res.status(201).json({message:'Successfully Retrieved', entry: user});
        } else {
            res.status(404).json({message:'Not found', entry: user});
        }

    }).catch(error => { 
        console.log(error)
        res.status(500).json({message: error});
        // Closing connection to Database
        AppDataSource.destroy()         
    }).then( async () => {        
        // Closing connection to Database
        AppDataSource.destroy()         
    })    
};

/* ************************************ */
/* * List Users with Filter             */
/* ************************************ */
export const listUsers: RequestHandler = (req, res, next) =>{
    // Grabbing query from parameters    
    const age =  req.query.age;
    const role = req.query.role;
    const occupation = req.query.occupation;
    const type = req.query.type;

    let tmpUsers: User[] = USERS;
    if (age){
        let ageNumb = +age;
        tmpUsers = tmpUsers.filter( (user) => user.age === ageNumb);
    }
    if (role){
        tmpUsers = tmpUsers.filter( (user) => user.role === role);
    }    
    if (occupation){
        tmpUsers = tmpUsers.filter( (user) => user.occupation === occupation);
    }
    
    if (type){        
        tmpUsers = tmpUsers.filter( (user) => {            
            return user.type === type;
        });
    }    
    res.status(201).json({Users: tmpUsers});  
};

/* ************************************ */
/* * Update User                        */
/* ************************************ */
export const updateUser: RequestHandler<{id: string}> = (req, res, next) =>{
    // Grabbing possible changes
    const name = (req.body as RequestBody).name;
    const age = (req.body as RequestBody).age;
    const role = (req.body as RequestBody).role;
    const occupation = (req.body as RequestBody).occupation;
    const type: UserType = deriveUserType(role,occupation);

    // Grabbing id from url
    const id = +req.params.id;

    // Finding user in array
    const userIndex = USERS.findIndex((user) => user.id === id);
    if (userIndex<0){
        throw new Error('operation failed: user not found');
    }
    const currentUser = USERS[userIndex];

    // Updating user
    const updatedUser =  new User();
    updatedUser.id = currentUser.id;
    updatedUser.type = type;
    updatedUser.name = name;
    updatedUser.age = age;
    updatedUser.occupation = occupation;
    updatedUser.role = role; 

    USERS[userIndex] = updatedUser;

    //Sending response
    res.status(201).json({message:'Successfully updated.', user: USERS[userIndex]});
};

/* ************************************ */
/* * Delete User                        */
/* ************************************ */
export const deleteUser: RequestHandler<{id: string}> = (req, res, next) =>{
    // Grabbing url from parameters    
    const id =  +req.params.id;

    // Finding index of item to update
    const userIndex = USERS.findIndex( (user) => { return user.id === id});
    if (userIndex < 0){
        throw new Error("operation failed: user not found");
    }

    // Delete user
    USERS.splice(userIndex,1);
     
    // Sending response back    
    res.status(201).json({message:'Successfully deleted.', users: USERS});
};