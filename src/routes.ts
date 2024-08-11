import express from "express";

import { authMiddleware } from "./middlewares/AuthMiddleware";
import { authRouter } from "./useCases/auth/AuthRoutes";
import { userRouter } from "./useCases/user/UserRoutes";
import { companyRouter } from "./useCases/company/CompanyRoutes";

const router = express.Router();
router.use('/auth', authRouter);
router.use(authMiddleware)
router.use('/users', userRouter);
router.use('/companies', companyRouter);

export { router };
