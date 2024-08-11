import { ListUserUseCase } from "./ListUserUseCase"
import { Request, Response } from "express";

export class ListUserController {
    constructor(
        private listUserUseCase: ListUserUseCase
    ) {}

    async handle(request: Request, response: Response) {
        try {
            const users = await this.listUserUseCase.execute(request.query, request.body)
            return response.status(201).json({ users })
        } catch (error) {
            return response.status(400).json({
                error: error.message || 'Unexpected error'
            })
        }
    }
}

