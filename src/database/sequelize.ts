import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  host: 'localhost',
  database: 'cinema_db',
  port: 3306,
  username: 'cinema_user',
  password: 'Cinema25@',
  dialect: "mysql"
})