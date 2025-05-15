const { sequelize, DataTypes } = require('../orm');

const Department = sequelize.define('Department', {
    Department_ID: {
        type: DataTypes.CHAR(5),
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Location: {
        type: DataTypes.STRING(50),
    },
    Phone: {
        type: DataTypes.STRING(15)
    },
    Established_Year: {
        type: DataTypes.INTEGER(11)
    },
    Chair_ID: {
        type: DataTypes.CHAR(6),
        references: {
            model: 'TEACHER',
            key: 'Teacher_ID'
        }
    },
    College: {
        type: DataTypes.STRING(30)
    }
}, {
    tableName: 'DEPARTMENT',
    timestamps: false
});

module.exports = Department;
