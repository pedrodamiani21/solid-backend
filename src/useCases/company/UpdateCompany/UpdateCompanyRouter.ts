import { Router } from "express";
import { UpdateCompanyController } from "./UpdateCompanyController";
import { UpdateCompanyUseCase } from "./UpdateCompanyUseCase";
import { SequelizeCompanyRepository } from "../../../repositories/sequelize/sequelizeCompanyRepository";

const update = Router();

const companyRepository = new SequelizeCompanyRepository();
const updateCompanyUseCase = new UpdateCompanyUseCase(companyRepository);
const updateCompanyController = new UpdateCompanyController(updateCompanyUseCase);

update.put('/:id', (request, response) => {
    updateCompanyController.handle(request, response);
});

export { update };
