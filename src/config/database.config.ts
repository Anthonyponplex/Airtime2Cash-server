/* eslint-disable no-undef */

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
import { Sequelize } from 'sequelize';

const db = new Sequelize('app', '', '', {
  storage: './database.sqlite',
  dialect: 'sqlite',
  logging: false,
});

export default db;
