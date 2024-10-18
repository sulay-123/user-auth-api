import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, AllowNull } from 'sequelize-typescript';

@Table
class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number; // Ensure you have a primary key

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  username!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.BIGINT,
    allowNull: true,
    unique: true,
  })
  phone!: number;
}

export default User;
