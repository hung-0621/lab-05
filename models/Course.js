const { sequelize, DataTypes } = require('../orm');

const Course = sequelize.define('Course', {
    Course_ID: {
        type: DataTypes.CHAR(8),
        primaryKey: true
    },
    Title: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    Credits: {
        type: DataTypes.INTEGER(11),
    },
    Level: {
        type: DataTypes.STRING(10),
    },
    Hours_Per_Week: {
        type: DataTypes.INTEGER(11),
    },
    Department_ID: {
        type: DataTypes.CHAR(5),
        references: {
            model: 'DEPARTMENT',
            key: 'Department_ID'
        }
    }
}, {
    tableName: 'COURSE',
    timestamps: false
});

module.exports = Course;
