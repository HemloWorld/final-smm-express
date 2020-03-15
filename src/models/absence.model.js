const connection = require('../../config/dbConn');
const Sequelize = require('sequelize');

const Absence = connection.define('absence', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
        allowNull: false,
    },
    datetime: {
        type: Sequelize.STRING,
        allowNull: false,
    },
}, {
    freezeTableName: true,
    tableName: "Absence",
    paranoid: true,
    timestamps: false,
});

module.exports = Absence;

