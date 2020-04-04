const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const logEmitter = require('../events/logEmitter');
const Attendance = require('../models/attendance.model');
const Gender = require('../models/gender.model');
const BloodType = require('../models/btype.model');
const Department = require('../models/department.model');

class UserService {
    constructor(user) {
        this.user = user;
    }

    async fetchAll() {
        try {
            const result = await this.user.findAll(
                {
                    include: [Gender,
                        BloodType,
                        Department,
                        {
                            model: Attendance,
                            separate: true,
                            order: [['date', 'desc'], ['time', 'desc']],
                        }],
                    attributes: ['id', 'qrId',
                        'nfcId', 'name',
                        'birth', 'email',
                        'phone', 'photoUrl'],
                });
            return result;
        } catch (e) {
            logEmitter.emit('APP-ERROR', {
                logTitle: "FETCH ALL USER LIST SERVICE FAILED",
                logMessage: e
            });
            throw new Error('E201');
        }

    }

    async fetchById(id) {
        try {
            const result = await this.user.findOne(
                {
                    where: { id: id },
                    include: [Gender,
                        BloodType,
                        Department,
                        {
                            model: Attendance,
                            separate: true,
                            order: [['date', 'desc'], ['time', 'desc']],
                            limit: 1,
                        }],
                    attributes: ['id', 'qrId',
                        'nfcId', 'name',
                        'birth', 'email',
                        'phone', 'photoUrl'],
                });
            return result;
        } catch (e) {
            logEmitter.emit('APP-ERROR', {
                logTitle: "FETCH USER DATA BY USER ID SERVICE FAILED",
                logMessage: e
            });
            throw new Error('E202');
        }
    }

    async fetchByNfcId(id) {
        try {
            const result = await this.user.findOne(
                {
                    where: { nfcId: id },
                    include: [Gender,
                        BloodType,
                        Department,
                        {
                            model: Attendance,
                            separate: true,
                            order: [['date', 'desc'], ['time', 'desc']],
                            limit: 1,
                        }],
                    attributes: ['id', 'qrId',
                        'nfcId', 'name',
                        'birth', 'email',
                        'phone', 'photoUrl'],
                });

            return result;
        } catch (e) {
            logEmitter.emit('APP-ERROR', {
                logTitle: "FETCH USER DATA BY NFC ID SERVICE FAILED",
                logMessage: e
            });
            throw new Error('E203');
        }
    }

    async fetchByQrId(id) {
        try {
            const result = await this.user.findOne(
                {
                    where: { qrId: id },
                    include: [Gender,
                        BloodType,
                        Department,
                        {
                            model: Attendance,
                            separate: true,
                            order: [['date', 'desc'], ['time', 'desc']],
                            limit: 1,
                        }],
                    attributes: ['id', 'qrId',
                        'nfcId', 'name',
                        'birth', 'email',
                        'phone', 'photoUrl'],
                });
            return result;
        } catch (e) {
            logEmitter.emit('APP-ERROR', {
                logTitle: "FETCH USER DATA BY QR ID SERVICE FAILED",
                logMessage: e
            });
            throw new Error('E204');
        }
    }

    async fetchByName(name) {
        try {
            const result = await this.user.findAll(
                {
                    where: {
                        name: {
                            [Op.like]: `%${name}%`
                        }
                    },
                    attributes: ['id', 'qrId',
                        'nfcId', 'name',
                        'birth', 'email',
                        'phone', 'photoUrl'],
                    include: [{
                        model: Attendance,
                        separate: true,
                        order: [['date', 'desc'], ['time', 'desc']],
                        limit: 1,
                    }, Department, BloodType, Gender],
                }
            );

            return result;
        } catch (e) {
            logEmitter.emit('APP-ERROR', {
                logTitle: "FETCH USER DATA BY NAME SERVICE FAILED",
                logMessage: e
            });
            throw new Error('E205');
        }
    }
}
module.exports = UserService;