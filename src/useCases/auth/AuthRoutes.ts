import express from "express";
import { auth } from "./AuthUser/AuthUserRouter";

const authRouter = express.Router();

authRouter.use('/', auth);
export { authRouter };
