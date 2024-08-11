import { CompanyRepository } from '../../../repositories/CompanyRepository';
import { Company } from '../../../entities/company/company';

interface ListCompanyRequest {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
}

type ListCompanyResponse = Company[];

export class ListCompanyUseCase {
    constructor(private companyRepository: CompanyRepository) {}

    async execute(params: ListCompanyRequest, body: any): Promise<ListCompanyResponse> {
        const { userAuth } = body;

        if (userAuth.companyId !== 1) {
            params.id = userAuth.companyId;
        }
        const companies = await this.companyRepository.findAll(params);
        return companies;
    }
}
