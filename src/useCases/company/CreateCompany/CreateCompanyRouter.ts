import { Router } from "express";
import { CreateCompanyController } from "./CreateCompanyController";
import { CreateCompanyUseCase } from "./CreateCompanyUseCase";
import { SequelizeCompanyRepository } from "../../../repositories/sequelize/sequelizeCompanyRepository";

const create = Router();

const companyRepository = new SequelizeCompanyRepository();
const createCompanyUseCase = new CreateCompanyUseCase(companyRepository);
const createCompanyController = new CreateCompanyController(createCompanyUseCase);

create.post('/', (request, response) => {
    createCompanyController.handle(request, response);
});

export { create };
