import { User } from "../entities/user/user";

export interface UserRepository {
    findById(id: number): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findAll(filter: object): Promise<User[]>;
    save(user: User): Promise<void>;
    update(user: Partial<User>): Promise<void>;
    destroy(id: number): Promise<void>
}
