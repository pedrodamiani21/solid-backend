import { Router } from "express";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { SequelizeUserRepository } from "../../../repositories/sequelize/sequelizeUserRepository";

const create = Router();

const userRepository = new SequelizeUserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);

create.post('/', (request, response) => {
    createUserController.handle(request, response);
});

export { create };
