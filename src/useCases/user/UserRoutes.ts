import express from "express";
import { create } from "./CreateUser/CreateUserRouter";
import { update } from "./UpdateUser/UpdateUserRouter";
import { list } from "./ListUser/ListUserRouter";
import { destroy } from "./DestroyUser/DestroyUserRouter";
const userRouter = express.Router();

userRouter.use('/', create);
userRouter.use('/', update);
userRouter.use('/', list);
userRouter.use('/', destroy)
export { userRouter };
