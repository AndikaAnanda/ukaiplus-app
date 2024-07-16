import { Sequelize } from "sequelize";

const sequelize = new Sequelize('ukaiplus', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
})

export default sequelize