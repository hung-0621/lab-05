const { sequelize, DataTypes } = require('../orm');

const Enrollment = sequelize.define('Enrollment', {
    Student_ID: {
        type: DataTypes.STRING(9),
        primaryKey: true,
        allowNull: false,
    },
    Course_ID: {
        type: DataTypes.STRING(8),
        primaryKey: true,
        allowNull: false,
    },
    Semester_ID: {
        type: DataTypes.STRING(6),
        primaryKey: true,
        allowNull: false
    },
    Enrollment_Date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    Grade: {
        type: DataTypes.DECIMAL(5, 2),
        defaultValue: null,
    },
    Status:{
        type: DataTypes.STRING(10),
        defaultValue: '修課中',
    }
}, {
    tableName: 'ENROLLMENT',
    timestamps: false
});

module.exports = Enrollment;
