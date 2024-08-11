import { UserRepository } from '../../../repositories/UserRepository';
import { User } from '../../../entities/user/user';
import { ValidationService } from './CreateUserValidationsService';

interface CreateUserRequest {
    name: string;
    email: string;
    password: string;
    companyId: number;
    userAuth?:any;
}

type CreateUserResponse = User;

export class CreateUserUseCase {
    constructor(private userRepository: UserRepository) {
        ValidationService.userRepository = userRepository;
    }

    async execute({ name, email, password, userAuth }: CreateUserRequest): Promise<CreateUserResponse> {
        await ValidationService.validateAll({ email, password});
        const user:User = new User({ name, email, password, companyId: userAuth.companyId });
        console.log(user)
        await this.userRepository.save(user);
        return user;
    }
}
