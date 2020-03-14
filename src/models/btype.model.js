const connection = require('../../config/dbConn');
const Sequelize = require('sequelize');

const BloodType = connection.define('BloodType', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false,
        primaryKey: true,
    },
    Type: {
        type: Sequelize.CHAR(2),
        allowNull: false,
        unique: true, 
    }
}, {
    freezeTableName: true,
    tableName: 'BloodType',
    paranoid: true,
    timestamps: false,
});

module.exports = BloodType;