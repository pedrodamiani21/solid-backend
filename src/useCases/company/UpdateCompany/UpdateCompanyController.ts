import { UpdateCompanyUseCase } from "./UpdateCompanyUseCase"
import { Request, Response } from "express";
import { Company } from "../../../entities/company/company";

export class UpdateCompanyController {
    constructor(
        private updateCompanyUseCase: UpdateCompanyUseCase
    ) {}

    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const numberId =  Number(id);
        try {
            await this.updateCompanyUseCase.execute(request.body as Company, numberId)
            return response.status(201).json({ message: "Company Updated" })
        } catch (error) {
            return response.status(400).json({
                error: error.message || 'Unexpected error'
            })
        }
    }
}

