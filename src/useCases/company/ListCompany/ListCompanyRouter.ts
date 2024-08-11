import { Router } from "express";
import { ListCompanyController } from "./ListCompanyController";
import { ListCompanyUseCase } from "./ListCompanyUseCase";
import { SequelizeCompanyRepository } from "../../../repositories/sequelize/sequelizeCompanyRepository";

const list = Router();

const companyRepository = new SequelizeCompanyRepository();
const listCompanyUseCase = new ListCompanyUseCase(companyRepository);
const listCompanyController = new ListCompanyController(listCompanyUseCase);

list.get('/', (request, response) => {
    listCompanyController.handle(request, response);
});

export { list };
