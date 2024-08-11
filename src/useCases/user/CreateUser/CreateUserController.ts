import { CreateUserUseCase } from "./CreateUserUseCase"
import { Request, Response } from "express";
import { User } from "../../../entities/user/user";
export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) {}

    async handle(request: Request, response: Response) {
        try {
            await this.createUserUseCase.execute(request.body as User)
            return response.status(201).json({ message: "User Created" })
        } catch (error) {
            return response.status(400).json({
                error: error.message || 'Unexpected error'
            })
        }
    }
}

