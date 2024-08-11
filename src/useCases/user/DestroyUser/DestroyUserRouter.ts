import { Router } from "express";
import { DestroyUserController } from "./DestroyUserController";
import { DestroyUserUseCase } from "./DestroyUserUseCase";
import { SequelizeUserRepository } from "../../../repositories/sequelize/sequelizeUserRepository";

const destroy = Router();

const userRepository = new SequelizeUserRepository();
const destroyUserUseCase = new DestroyUserUseCase(userRepository);
const destroyUserController = new DestroyUserController(destroyUserUseCase);

destroy.delete('/:id', (request, response) => {
    destroyUserController.handle(request, response);
});

export { destroy };
