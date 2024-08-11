import express from "express";
import { create } from "./CreateCompany/CreateCompanyRouter";
import { update } from "./UpdateCompany/UpdateCompanyRouter";
import { list } from "./ListCompany/ListCompanyRouter";
import { destroy } from "./DestroyCompany/DestroyCompanyRouter";
const companyRouter = express.Router();

companyRouter.use('/', create);
companyRouter.use('/', update);
companyRouter.use('/', list);
companyRouter.use('/', destroy)
export { companyRouter };
