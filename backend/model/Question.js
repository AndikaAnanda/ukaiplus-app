import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Topic from "./Topic.js";

const Question = sequelize.define('Question', {
    question_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    question: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    option_a: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    option_b: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    option_c: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    option_d: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    option_e: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    correct_answer: {
        type: DataTypes.ENUM('a', 'b', 'c', 'd', 'e'),
        allowNull: false,
    },
    discussion: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
})

// One-to-many relationship between Topic and Question
Topic.hasMany(Question, {
    foreignKey: 'topic_id'
})
Question.belongsTo(Topic, {
    foreignKey: 'topic_id'
})


export default Question