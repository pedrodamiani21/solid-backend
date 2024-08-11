import { CompanyRepository } from '../../../repositories/CompanyRepository';
import { Company } from '../../../entities/company/company';
import { ValidationService } from './CreateCompanyValidationsService';

interface CreateCompanyRequest {
    description: string;
    email: string;
    phone: string;
    userAuth?: any;
}

type CreateCompanyResponse = Company;

export class CreateCompanyUseCase {
    constructor(private companyRepository: CompanyRepository) {
        ValidationService.companyRepository = companyRepository;
    }

    async execute({ description, email, phone, userAuth }: CreateCompanyRequest): Promise<CreateCompanyResponse> {
        if (userAuth?.companyId !== 1) {
            throw new Error('User does not have permission for this action!');
        }
        await ValidationService.validateAll({ email });
        const company:Company = new Company({ description, email, phone});
        await this.companyRepository.save(company);
        return company;
    }
}
