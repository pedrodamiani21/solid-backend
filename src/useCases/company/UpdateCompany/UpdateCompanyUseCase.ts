import { CompanyRepository } from '../../../repositories/CompanyRepository';
import { ValidationService } from './UpdateCompanyValidationsService';
import { Company } from '../../../entities/company/company';

interface UpdateCompanyRequest {
    name?: string;
    email?: string;
    password?: string;
    userAuth?: any;
}

type UpdateCompanyResponse = Company;

export class UpdateCompanyUseCase {
    constructor(private companyRepository: CompanyRepository) {
        ValidationService.companyRepository = companyRepository;
    }

    async execute(companyData: UpdateCompanyRequest, id: number): Promise<UpdateCompanyResponse> {
        const { userAuth } = companyData;

        const existingCompany = await this.companyRepository.findById(id);
        if (!existingCompany) {
            throw new Error('Company does not exist!');
        }

        if (userAuth?.companyId !== 1 && existingCompany.id !== userAuth.companyId) {
            throw new Error('User does not have permission for this action!');
        }

        const updatedCompanyData:any = { ...existingCompany, ...companyData, id };
        const company = new Company(updatedCompanyData);
        await this.companyRepository.update(company);

        return company;
    }
}
