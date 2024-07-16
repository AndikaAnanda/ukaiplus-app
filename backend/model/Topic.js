import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Topic = sequelize.define('Topics', {
    topic_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    topic_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Topic