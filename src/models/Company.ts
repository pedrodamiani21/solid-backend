import { AutoIncrement, Column, Model, PrimaryKey, Table, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
class Company extends Model<Company> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  description?: string;
  
  @Column
  email?: string;

  @Column
  phone?: string;
  
  @CreatedAt
  createdAt?: Date;

  @UpdatedAt
  updatedAt?: Date;
}

export default Company;
