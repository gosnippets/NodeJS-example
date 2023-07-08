import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
import userModel from "./user.model.js";
import postModel from "./post.model.js";
import categoryModel from "./category.model.js";
import tagModel from "./tags.model.js";
dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql',
    logging: false
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = userModel(sequelize, Sequelize);
db.post = postModel(sequelize, Sequelize);
db.category = categoryModel(sequelize, Sequelize);
db.tag = tagModel(sequelize, Sequelize);

db.user.hasMany(db.post, { foreginkey: 'userId' });
db.post.belongsTo(db.user, { foreginkey: 'userId' });

db.post.belongsToMany(db.category, { through: 'PostCategory' })
db.category.belongsToMany(db.post, { through: 'PostCategory' })

db.post.belongsToMany(db.tag, { through: 'PostTag' })
db.tag.belongsToMany(db.post, { through: 'PostTag' })

export default db;