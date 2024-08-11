import { CompanyRepository } from '../../../repositories/CompanyRepository';

interface DestroyCompanyRequest {
    id: number,
    userAuth: any
}

type DestroyCompanyResponse = void; 

export class DestroyCompanyUseCase {
    constructor(private companyRepository: CompanyRepository) { }

    async execute(dataDestroy: DestroyCompanyRequest): Promise<DestroyCompanyResponse> {
        const { id, userAuth } = dataDestroy;

        const existingCompany = await this.companyRepository.findById(id);
        if (!existingCompany) {
            throw new Error('Company does not exist!');
        }

        if (userAuth?.companyId !== 1 && existingCompany.id !== userAuth.companyId) {
            throw new Error('User does not have permission for this action!');
        }

        return await this.companyRepository.destroy(id);
    }
}
