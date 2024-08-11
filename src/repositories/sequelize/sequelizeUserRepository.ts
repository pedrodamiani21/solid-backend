import { UserRepository } from '../UserRepository';
import { User } from '../../entities/user/user';
import Users from '../../models/User';
import { Op } from 'sequelize';
class SequelizeUserRepository implements UserRepository {

    async findAll(data: Partial<User>): Promise<User[]> {
        const whereClause: any = {};
        Object.entries(data).forEach(([key, value]) => {
            if (value) {
                if (key === 'name') {
                    whereClause[key] = {
                        [Op.like]: `%${value}%`
                    };
                } else {
                    whereClause[key] = value;
                }
            }
        });
        const users = await Users.findAll({
            where: whereClause,
            attributes: { exclude: ['password'] } 
        });
        return users.map(userRecord => new User(userRecord.get({ plain: true })));
    }

    async findByEmail(email: string): Promise<User | null> {
        const userRecord = await Users.findOne({ where: { email } });
        return userRecord ? new User(userRecord) : null;
    }

    async findById(id: number): Promise<User | null> {
        const userRecord = await Users.findByPk(id);
        return userRecord ? new User(userRecord) : null;
    }

    async save(user: any): Promise<void> {
        await Users.create(user.props);
    }

    async update(user: any): Promise<void> {
        if (!user.id) {
            throw new Error('User ID is required for update');
        }

        await Users.update(user.props, { where: { id: user.id } });
    }

    async destroy(id: number): Promise<void> {
        await Users.destroy({
            where: {
                id: id
            }
        });
    }
}

export { SequelizeUserRepository };
