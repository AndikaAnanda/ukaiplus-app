import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./User.js";
import Tryout from "./Tryout.js";


const Result = sequelize.define('Results', {
    result_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    score: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    time_elapsed: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

})

User.hasMany(Result, {
    foreignKey: 'user_id'
})
Result.belongsTo(User, {
    foreignKey: 'user_id'
})
Tryout.hasMany(Result, {
    foreignKey: 'tryout_id'
})
Result.belongsTo(Tryout, {
    foreignKey: 'tryout_id'
})

export default Result