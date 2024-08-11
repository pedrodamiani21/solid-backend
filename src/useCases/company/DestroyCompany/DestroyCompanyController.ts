import { DestroyCompanyUseCase } from "./DestroyCompanyUseCase"
import { Request, Response } from "express";

export class DestroyCompanyController {
    constructor(
        private destroyCompanyUseCase: DestroyCompanyUseCase
    ) {}

    async handle(request: Request, response: Response) {
        const { userAuth } = request.body;
        const { id } = request.params;
        const numberId =  Number(id);
        try {
            const companys = await this.destroyCompanyUseCase.execute({id: numberId, userAuth})
            return response.status(201).json({ message: "Company Deleted" })
        } catch (error) {
            return response.status(400).json({
                error: error.message || 'Unexpected error'
            })
        }
    }
}

