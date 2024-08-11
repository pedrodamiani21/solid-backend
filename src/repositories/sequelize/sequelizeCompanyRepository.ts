import { CompanyRepository } from '../CompanyRepository';
import { Company } from '../../entities/company/company';
import Companies from '../../models/Company';
import { Op } from 'sequelize';

class SequelizeCompanyRepository implements CompanyRepository {

    async findAll(data: Partial<Company>): Promise<Company[]> {
        const whereClause: any = {};
        Object.entries(data).forEach(([key, value]) => {
            if (value) {
                if (key === 'description') {
                    whereClause[key] = {
                        [Op.like]: `%${value}%`
                    };
                } else {
                    whereClause[key] = value;
                }
            }
        });

        const companyRecords = await Companies.findAll({
            where: whereClause
        });

        return companyRecords.map(record => new Company(record.get({ plain: true })));
    }

    async findById(id: number): Promise<Company | null> {
        const companyRecord = await Companies.findByPk(id);
        return companyRecord ? new Company(companyRecord.get({ plain: true })) : null;
    }

    async save(company: any): Promise<void> {
        await Companies.create(company.props);
    }

    async update(company: any): Promise<void> {
        if (!company.id) {
            throw new Error('Company ID is required for update');
        }

        const [updated] = await Companies.update(company.props, { 
            where: { id: company.id } 
        });

        if (!updated) {
            throw new Error('Company update failed');
        }
    }

    async destroy(id: number): Promise<void> {
        const deleted = await Companies.destroy({
            where: { id }
        });

        if (!deleted) {
            throw new Error('Company not found or delete failed');
        }
    }
}

export { SequelizeCompanyRepository };
