import { AuthUserUseCase } from "./AuthUserUseCase"
import { Request, Response } from "express";
import { User } from "../../../entities/user/user";
export class AuthUserController {
    constructor(
        private authUserUseCase: AuthUserUseCase
    ) {}

    async handle(request: Request, response: Response) {
        try {
            const user = await this.authUserUseCase.execute(request.body as User)
            const { token } = user;
            return response.status(201).json({ message: "User Authenticated", token })
        } catch (error) {
            return response.status(400).json({
                error: error.message || 'Unexpected error'
            })
        }
    }
}

