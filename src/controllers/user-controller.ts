import { RequestHandler } from "express";
import { User } from "../models/users";

const USERS: User[] = [];

export const createUser: RequestHandler = (req, res, next ) => {

    //Sending response
    res.status(201).json({message:'Successfully created.'});
};

export const getUsers: RequestHandler = (req, res, next) =>{
    res.status(201).json({Users: USERS});
};

export const updateUser: RequestHandler<{id: string}> = (req, res, next) =>{

    //Sending response
    res.status(201).json({message:'Successfully updated.'});
};

export const deleteUser: RequestHandler<{id: string}> = (req, res, next) =>{

    //Sending response
    res.status(201).json({message:'Successfully deleted.'});
};