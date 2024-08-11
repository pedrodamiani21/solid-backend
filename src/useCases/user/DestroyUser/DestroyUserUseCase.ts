import { UserRepository } from '../../../repositories/UserRepository';

interface DestroyUserRequest {
    id: number,
    userAuth: any
}

type DestroyUserResponse = void; 

export class DestroyUserUseCase {
    constructor(private userRepository: UserRepository) { }

    async execute(dataDestroy: DestroyUserRequest): Promise<DestroyUserResponse> {
        const { id, userAuth } = dataDestroy;

        const existingUser = await this.userRepository.findById(id);
        if (!existingUser) {
            throw new Error('User does not exist!');
        }

        if (userAuth?.companyId !== 1 && existingUser.companyId !== userAuth.companyId) {
            throw new Error('User does not have permission for this action!');
        }

        return await this.userRepository.destroy(id);
    }
}
