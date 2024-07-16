import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import Tryout from "./Tryout.js";
import Question from "./Question.js";

const Answer = sequelize.define('Answer', {
    answer_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    answer: {
        type: DataTypes.ENUM('a', 'b', 'c', 'd', 'e'),
        allowNull: true,
    },
    is_correct: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    is_marked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
},
{
    timestamps: true,
    createdAt: true,
    updatedAt: false
})

Tryout.hasMany(Answer, {
    foreignKey: 'tryout_id',
})

Answer.belongsTo(Tryout, {
    foreignKey: 'tryout_id',
})

Question.hasMany(Answer, {
    foreignKey: 'question_id'
})
Answer.belongsTo(Question, {
    foreignKey: 'question_id'
})

export default Answer