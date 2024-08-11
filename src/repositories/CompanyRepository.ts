import { Company } from "../entities/company/company";

export interface CompanyRepository {
    findById(id: number): Promise<Company | null>;
    findAll(filter: object): Promise<Company[]>;
    save(company: Company): Promise<void>;
    update(company: Partial<Company>): Promise<void>;
    destroy(id: number): Promise<void>
}
