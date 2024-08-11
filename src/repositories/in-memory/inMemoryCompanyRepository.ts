import { User } from '../../entities/user/user';
import { UserRepository } from '../UserRepository';

export class inMemoryUsersRepository implements UserRepository {
    private users: User[] = [];


async findAll(data: any): Promise<User[] | []> {
    const users = this.users.filter(data);
    return users
}
    async findById(id: number): Promise<User | null> {
        const user = this.users.find(user => user.id === id);
        return user || null;
    }
    async findByEmail(email: string): Promise<User | null> {
        const user = this.users.find(user => user.email === email);
        return user || null;
    }

    async save(user: User): Promise<void> {
        this.users.push(user);
    }

    async update(user: User): Promise<void> {
        const index = this.users.findIndex(item => item.id === user.id);
        if (index !== -1) {
            this.users[index] = user;
        }
    }
    
    async destroy(id: number): Promise<void> {
        this.users = this.users.filter(user => user.id !== id);
    }
}
