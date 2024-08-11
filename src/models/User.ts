import { AutoIncrement, Column, Model, PrimaryKey, Table, BeforeSave, DataType, ForeignKey, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { hash } from 'bcryptjs';
import Company from './Company'

@Table
class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  name!: string;
  
  @Column
  email!: string;

  @Column
  password!: string;
  
  @ForeignKey(()=> Company)
  @Column
  companyId!: number;

  @CreatedAt
  createdAt?: Date;

  @UpdatedAt
  updatedAt?: Date;

  @BeforeSave
  static async hashPassword(user: User) {
    if (user.password) {
      user.password = await hash(user.password, 10);
    }
  }
}

export default User;
