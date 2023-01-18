import { RequestHandler } from "express";
import { RequestBody } from "../models/request-body";
import { User } from "../models/users";
import { UserType } from "../models/users";
import { defineUserType } from "../utils/type-util";
import { idGenerator } from "../utils/id-generator";

/* ************************************ */
/* * Repository                         */
/* ************************************ */
const USERS: User[] = [];

/* ************************************ */
/* * Create User                        */
/* ************************************ */
interface NewUserResponse {
    message: string
    entry: User
}

export const createUser: RequestHandler = (req, res, next) => {
  const body = req.body as RequestBody;
  const { name, age, role, occupation } = body;
  const type: UserType = defineUserType(role, occupation);

   const newUser =  new User(
                        idGenerator().toString(),
                        type,
                        name,
                        age,
                        role,
                        occupation
                    );

  // Storing item (memory, database, queue, etc)
  USERS.push(newUser);

  //Sending response
  res.status(201).json( <NewUserResponse> { message: "Successfully created.", entry: newUser });
};

/* ************************************ */
/* * Get User by Id                     */
/* ************************************ */
export const getUser: RequestHandler<{ id: string }> = (req, res, next) => {
  // Grabbing url from parameters
  const id = req.params.id;

  // Finding index of item to update
  const userIndex = USERS.findIndex((user) => {
    return user.id === id;
  });
  if (userIndex < 0) {
    res.status(400).json({ message: "operation failed: user not found." });
  }

  // Sending response back
  res.status(200).json({ user: USERS[userIndex] });
};

/* ************************************ */
/* * List Users with Filter             */
/* ************************************ */
export const listUsers: RequestHandler = (req, res, next) => {
  // Grabbing query from parameters
  const age = req.query.age;
  const role = req.query.role;
  const occupation = req.query.occupation;
  const type = req.query.type;

  let tmpUsers: User[] = USERS;
  if (age) {
    let ageNumb = +age;
    tmpUsers = tmpUsers.filter((user) => user.age === ageNumb);
  }
  if (role) {
    tmpUsers = tmpUsers.filter((user) => user.role === role);
  }
  if (occupation) {
    tmpUsers = tmpUsers.filter((user) => user.occupation === occupation);
  }

  if (type) {
    tmpUsers = tmpUsers.filter((user) => {
      return user.type === type;
    });
  }
  res.status(200).json({ Users: tmpUsers });
};

/* ************************************ */
/* * Update User                        */
/* ************************************ */
export const updateUser: RequestHandler<{ id: string }> = (req, res, next) => {
  // Grabbing possible changes
  const name = (req.body as RequestBody).name;
  const age = (req.body as RequestBody).age;
  const role = (req.body as RequestBody).role;
  const occupation = (req.body as RequestBody).occupation;
  const type: UserType = defineUserType(role, occupation);

  // Grabbing id from url
  const id = req.params.id;

  // Finding user in array
  const userIndex = USERS.findIndex((user) => user.id === id);
  if (userIndex < 0) {
    throw new Error("operation failed: user not found");
  }
  const currentUser = USERS[userIndex];

  // Updating user
  const updatedUser = new User(
    currentUser.id,
    type,
    name,
    age,
    role,
    occupation
  );
  USERS[userIndex] = updatedUser;

  //Sending response
  res
    .status(200)
    .json({ message: "Successfully updated.", user: USERS[userIndex] });
};

/* ************************************ */
/* * Delete User                        */
/* ************************************ */
export const deleteUser: RequestHandler<{ id: string }> = (req, res, next) => {
  // Grabbing url from parameters
  const id = req.params.id;

  // Finding index of item to update
  const userIndex = USERS.findIndex((user) => {
    return user.id === id;
  });
  if (userIndex < 0) {
    throw new Error("operation failed: user not found");
  }

  // Delete user
  USERS.splice(userIndex, 1);

  // Sending response back
  res.status(200).json({ message: "Successfully deleted.", users: USERS });
};
