"use strict";
/* eslint-disable no-undef */
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('app', '', '', {
    storage: './database.sqlite',
    dialect: 'sqlite',
    logging: false,
});
exports.default = db;
//# sourceMappingURL=database.config.js.map