import { DestroyUserUseCase } from "./DestroyUserUseCase"
import { Request, Response } from "express";

export class DestroyUserController {
    constructor(
        private destroyUserUseCase: DestroyUserUseCase
    ) {}

    async handle(request: Request, response: Response) {
        const { userAuth } = request.body;
        const { id } = request.params;
        const numberId =  Number(id);
        try {
            const users = await this.destroyUserUseCase.execute({id: numberId, userAuth})
            return response.status(201).json({ message: "User Deleted" })
        } catch (error) {
            return response.status(400).json({
                error: error.message || 'Unexpected error'
            })
        }
    }
}

