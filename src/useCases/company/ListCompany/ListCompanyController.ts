import { ListCompanyUseCase } from "./ListCompanyUseCase"
import { Request, Response } from "express";

export class ListCompanyController {
    constructor(
        private listCompanyUseCase: ListCompanyUseCase
    ) {}

    async handle(request: Request, response: Response) {
        try {
            const companies = await this.listCompanyUseCase.execute(request.query, request.body)
            return response.status(201).json({ companies })
        } catch (error) {
            return response.status(400).json({
                error: error.message || 'Unexpected error'
            })
        }
    }
}

