import { Router } from "express";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { SequelizeUserRepository } from "../../../repositories/sequelize/sequelizeUserRepository";

const update = Router();

const userRepository = new SequelizeUserRepository();
const updateUserUseCase = new UpdateUserUseCase(userRepository);
const updateUserController = new UpdateUserController(updateUserUseCase);

update.put('/:id', (request, response) => {
    updateUserController.handle(request, response);
});

export { update };
