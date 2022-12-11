import { RequestHandler } from "express";

const USERS: [] = [];

export const createTodo: RequestHandler = (req, res, next ) => {

    //Sending response
    res.status(201).json({message:'Successfully created.'});
};

export const getTodos: RequestHandler = (req, res, next) =>{
    res.status(201).json({todos: USERS});
};

export const updateTodo: RequestHandler<{id: string}> = (req, res, next) =>{

    //Sending response
    res.status(201).json({message:'Successfully updated.'});
};

export const deleteTodo: RequestHandler<{id: string}> = (req, res, next) =>{

    //Sending response
    res.status(201).json({message:'Successfully deleted.'});
};