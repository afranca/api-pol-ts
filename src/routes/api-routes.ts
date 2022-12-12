import { Router } from "express";
import { createUser, getUser, listUsers, updateUser, deleteUser } from "../controllers/user-controller";

const router = Router();

router.post('/users', createUser);

router.get('/users/:id', getUser);

router.get('/users', listUsers);

router.patch('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

export default router;