import { Router } from "express";
import { AuthUserController } from "./AuthUserController";
import { AuthUserUseCase } from "./AuthUserUseCase";
import { SequelizeUserRepository } from "../../../repositories/sequelize/sequelizeUserRepository";

const auth = Router();

const userRepository = new SequelizeUserRepository();
const authUserUseCase = new AuthUserUseCase(userRepository);
const authUserController = new AuthUserController(authUserUseCase);

auth.post('/', (request, response) => {
    authUserController.handle(request, response);
});

export { auth };
