import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./User.js";

const Tryout = sequelize.define('Tryout', {
    tryout_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    tryout_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tryout_type: {
        type: DataTypes.ENUM('komprehensif', 'mini_tryout'),
        allowNull: false,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
{
    timestamps: true,
    createdAt: true,
    updatedAt: false,
})

// One-to-many relationship between User and Tryout
User.hasMany(Tryout, {
    foreignKey: 'user_id',
})

Tryout.belongsTo(User, {
    foreignKey: 'user_id'
})

export default Tryout