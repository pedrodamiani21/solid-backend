import { UpdateUserUseCase } from "./UpdateUserUseCase"
import { Request, Response } from "express";
import { User } from "../../../entities/user/user";

export class UpdateUserController {
    constructor(
        private updateUserUseCase: UpdateUserUseCase
    ) {}

    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const numberId =  Number(id);
        try {
            await this.updateUserUseCase.execute(request.body as User, numberId)
            return response.status(201).json({ message: "User Updated" })
        } catch (error) {
            return response.status(400).json({
                error: error.message || 'Unexpected error'
            })
        }
    }
}

