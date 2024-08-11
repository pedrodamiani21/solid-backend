import { Router } from "express";
import { ListUserController } from "./ListUserController";
import { ListUserUseCase } from "./ListUserUseCase";
import { SequelizeUserRepository } from "../../../repositories/sequelize/sequelizeUserRepository";

const list = Router();

const userRepository = new SequelizeUserRepository();
const listUserUseCase = new ListUserUseCase(userRepository);
const listUserController = new ListUserController(listUserUseCase);

list.get('/', (request, response) => {
    listUserController.handle(request, response);
});

export { list };
