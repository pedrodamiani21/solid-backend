import { UserRepository } from '../../../repositories/UserRepository';
import { isValidEmail, isValidPassword, isValidRequiredFields } from '../UserValidations';

interface CreateUserRequest {
    email: string;
    password: string;
}
export class ValidationService {

    static userRepository: UserRepository;

    static validateEmail(email: string): void {
        if (!isValidEmail(email)) {
            throw new Error('Invalid email format');
        }
    }

    static validatePassword(password: string): void {
        if (!isValidPassword(password)) {
            throw new Error('Password must be longer than 5 characters');
        }
    }

    static validateRequiredFields({ email, password }: CreateUserRequest): void {
        const validate = isValidRequiredFields({ email, password }, ['email', 'password']);
        if (!validate.status) {
            throw new Error(validate.errors + ' is required!');
        }
    }

    static async validateUserDoesNotExist(email: string): Promise<void> {
        if (!ValidationService.userRepository) {
            throw new Error('UserRepository not set');
        }
        const userExists = await ValidationService.userRepository.findByEmail(email);
        if (userExists) {
            throw new Error('User already exists');
        }
    }
    static async validateAll({ email, password}: CreateUserRequest): Promise<void> {
        await ValidationService.validateUserDoesNotExist(email);
        ValidationService.validateRequiredFields({ email, password });
        ValidationService.validateEmail(email);
        ValidationService.validatePassword(password);
    }
}
