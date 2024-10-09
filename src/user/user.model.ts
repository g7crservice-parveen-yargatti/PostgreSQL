import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'user',
})
export class User extends Model<User> {
  @Column({
    field: 'useName',
    type: DataType.STRING,
    allowNull: false,
  })
  username: string;
}
