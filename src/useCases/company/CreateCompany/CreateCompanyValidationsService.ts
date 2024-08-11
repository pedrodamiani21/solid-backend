import { CompanyRepository } from '../../../repositories/CompanyRepository';
import { isValidEmail, isValidRequiredFields } from '../CompanyValidations';

interface CreateCompanyRequest {
    email: string;
}
export class ValidationService {

    static companyRepository: CompanyRepository;

    static validateEmail(email: string): void {
        if (!isValidEmail(email)) {
            throw new Error('Invalid email format');
        }
    }

    static validateRequiredFields({ email }: CreateCompanyRequest): void {
        const validate = isValidRequiredFields({ email }, ['email']);
        if (!validate.status) {
            throw new Error(validate.errors + ' is required!');
        }
    }

    static async validateAll({ email } : CreateCompanyRequest): Promise<void> {
        ValidationService.validateRequiredFields({ email });
        ValidationService.validateEmail(email);
    }
}
