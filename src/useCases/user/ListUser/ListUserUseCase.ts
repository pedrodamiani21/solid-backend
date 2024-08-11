import { UserRepository } from '../../../repositories/UserRepository';
import { User } from '../../../entities/user/user';

interface ListUserRequest {
    name?: string;
    email?: string;
    password?: string;
    companyId?: number;
}

type ListUserResponse = User[];

export class ListUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(params: ListUserRequest, body: any): Promise<ListUserResponse> {
        const { userAuth } = body;

        if (userAuth.companyId !== 1) {
            params.companyId = userAuth.companyId;
        }

        const users = await this.userRepository.findAll(params);
        return users;
    }
}
