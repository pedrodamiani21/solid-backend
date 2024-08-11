import { Sequelize } from 'sequelize-typescript';
import path from 'path';
const config = require("../config/database");
const sequelize = new Sequelize({
  ...config,
  models: [path.resolve(__dirname, '../models')],
});

export default sequelize;