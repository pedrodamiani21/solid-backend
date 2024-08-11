import { UserRepository } from '../../../repositories/UserRepository';
import { ValidationService } from './UpdateUserValidationsService';
import { User } from '../../../entities/user/user';
import { hash } from 'bcryptjs';

interface UpdateUserRequest {
    name?: string;
    email?: string;
    password?: string;
    userAuth?: any;
}

type UpdateUserResponse = User;

export class UpdateUserUseCase {
    constructor(private userRepository: UserRepository) {
        ValidationService.userRepository = userRepository;
    }

    async execute(userData: UpdateUserRequest, id: number): Promise<UpdateUserResponse> {
        const { password, userAuth } = userData;

        if (password) {
            await ValidationService.validatePassword(password);
            userData.password = await hash(password, 10);
        }

        const existingUser = await this.userRepository.findById(id);
        if (!existingUser) {
            throw new Error('User does not exist!');
        }

        if (userAuth?.companyId !== 1 && existingUser.companyId !== userAuth.companyId) {
            throw new Error('User does not have permission for this action!');
        }

        const updatedUserData:any = { ...existingUser, ...userData, id };
        const user = new User(updatedUserData);
        await this.userRepository.update(user);

        return user;
    }
}
