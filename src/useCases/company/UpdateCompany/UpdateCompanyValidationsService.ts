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

    static async validateAll({ email }: CreateCompanyRequest): Promise<void> {
        if (email) {
            ValidationService.validateEmail(email);
        }
    }
}
