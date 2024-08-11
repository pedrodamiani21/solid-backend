import { CreateCompanyUseCase } from "./CreateCompanyUseCase"
import { Request, Response } from "express";
import { Company } from "../../../entities/company/company";
export class CreateCompanyController {
    constructor(
        private createCompanyUseCase: CreateCompanyUseCase
    ) {}

    async handle(request: Request, response: Response) {
        try {
            await this.createCompanyUseCase.execute(request.body as Company)
            return response.status(201).json({ message: "Company Created" })
        } catch (error) {
            return response.status(400).json({
                error: error.message || 'Unexpected error'
            })
        }
    }
}

