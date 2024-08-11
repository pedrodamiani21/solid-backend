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
    static async validateAll({ email, password }: CreateUserRequest): Promise<void> {
        if (email) {
            ValidationService.validateEmail(email);
        }
        if (password) {
            ValidationService.validatePassword(password);
        }
    }
}
