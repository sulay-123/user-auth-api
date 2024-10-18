import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import User from '../models/user';

dotenv.config();

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  dialect: 'mysql',
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  models: [User], // Path to the model files
});

export default sequelize;
