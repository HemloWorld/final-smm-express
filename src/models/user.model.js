const connection = require('../../config/dbConn');
const Sequelize = require('sequelize');

const User = connection.define('user', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false,
        primaryKey: true,
    },
    QRid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false,
    },
    NFCid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false,
        unique: true,
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Birth: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },
    Phone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    PhotoUrl: {
        type: Sequelize.STRING,
        allowNull: false,
    },
}, {
    freezeTableName: true,
    tableName: 'User',
    paranoid: true,
    timestamps: false,
});

module.exports = User;