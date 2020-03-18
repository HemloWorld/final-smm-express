const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const logEmitter = require('../events/logEmitter');
const moment = require('moment');

class UserService {
    constructor(user, bloodType, department, attendance, gender) {
        this.user = user;
        this.bloodType = bloodType;
        this.department = department;
        this.attendance = attendance;
        this.gender = gender;
    }

    async fetchAllUser() {
        try {
            const result = await this.user.findAll(
                {
                    include: [this.gender,
                    this.bloodType,
                    this.department,
                    this.attendance],
                    order: [
                        [{ model: this.attendance }, 'datetime', 'desc']
                    ]
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

    async fetchUserById(id) {
        try {
            const result = await this.user.findOne(
                {
                    where: { id: id },
                    include: [this.gender,
                    this.bloodType,
                    this.department,
                    this.attendance],
                    order: [
                        [{ model: this.attendance }, 'datetime', 'desc']
                    ]
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

    async fetchUserByNfcId(id) {
        try {
            const result = await this.user.findOne(
                {
                    where: { nfcId: id },
                    include: [this.gender,
                    this.bloodType,
                    this.department,
                    this.attendance],
                    order: [
                        [{ model: this.attendance }, 'datetime', 'desc']
                    ]
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

    async fetchUserByQrId(id) {
        try {
            const result = await this.user.findOne(
                {
                    where: { qrId: id },
                    include: [this.gender,
                    this.bloodType,
                    this.department,
                    this.attendance],
                    order: [
                        [{ model: this.attendance }, 'datetime', 'desc']
                    ]
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

    async fetchAbsence(date) {
        try {
            const result = await this.attendance.findAll(
                {
                    where: {
                        datetime: {
                            [Op.like]: `%${date}%`,
                        }
                    },
                    include: { model: this.user, attributes: ['name'] },
                }
            );

            return result;
        } catch (e) {
            logEmitter.emit('APP-ERROR', {
                logTitle: "FETCH ABSENCE DATA BY DATE SERVICE FAILED",
                logMessage: e
            });
            throw new Error('E205');
        }
    }

    async postAbsence(body, id) {
        try {
            const result = await this.attendance.create(
                {
                    datetime: body.datetime,
                    userId: id,
                }
            );

            return result;
        } catch (e) {
            logEmitter.emit('APP-ERROR', {
                logTitle: "POST NEW ABSENCE DATA SERVICE FAILED",
                logMessage: e
            });
            throw new Error('E206');
        }
    }

    async fetchUserByName(name) {
        try {
            const result = await this.user.findAll(
                {
                    where: {
                        name: {
                            [Op.like]: `%${name}%`
                        }
                    },
                    attributes: ['name'],
                    include: {
                        model: this.attendance,
                        separate: true,
                        limit: 1,
                        order: [['datetime', 'desc']],
                    },
                }
            );

            return result;
        } catch (e) {
            logEmitter.emit('APP-ERROR', {
                logTitle: "FETCH USER DATA BY NAME SERVICE FAILED",
                logMessage: e
            });
            throw new Error('E207');
        }
    }
}

module.exports = UserService;