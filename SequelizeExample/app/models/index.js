import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
import userModel from "./user.model.js";
import taskModel from "./task.model.js";
import profileModel from "./profile.model.js";
dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql'
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = userModel(sequelize, Sequelize);
db.task = taskModel(sequelize, Sequelize);
db.profile = profileModel(sequelize, Sequelize);

db.users.hasMany(db.task, { foreignKey: "userId" }); // one-to-many relationsnhip
db.task.belongsTo(db.users, { foreignKey: "userId" }); // many-to-one relationsnhip

db.users.hasOne(db.profile, { foreignKey: "userId" }); // one-to-one relationship
db.profile.belongsTo(db.users, { foreignKey: "userId" }); // one-to-one relationship 

export default db;