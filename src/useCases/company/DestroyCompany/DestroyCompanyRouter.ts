import { Router } from "express";
import { DestroyCompanyController } from "./DestroyCompanyController";
import { DestroyCompanyUseCase } from "./DestroyCompanyUseCase";
import { SequelizeCompanyRepository } from "../../../repositories/sequelize/sequelizeCompanyRepository";

const destroy = Router();

const companyRepository = new SequelizeCompanyRepository();
const destroyCompanyUseCase = new DestroyCompanyUseCase(companyRepository);
const destroyCompanyController = new DestroyCompanyController(destroyCompanyUseCase);

destroy.delete('/:id', (request, response) => {
    destroyCompanyController.handle(request, response);
});

export { destroy };
