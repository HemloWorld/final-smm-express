const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const logEmitter = require('../events/logEmitter');
const moment = require('moment');

class UserService {
    constructor(user, bloodType, department, absence, gender) {
        this.user = user;
        this.bloodType = bloodType;
        this.department = department;
        this.absence = absence;
        this.gender = gender;
    }

    async fetchAllUser() {
        try {
            const result = await this.user.findAll(
                {
                    include: [this.gender,
                    this.bloodType,
                    this.department,
                    this.absence],
                    order: [
                        [{ model: this.absence }, 'datetime', 'desc']
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
                    this.absence],
                    order: [
                        [{ model: this.absence }, 'datetime', 'desc']
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
                    where: { NFCid: id },
                    include: [this.gender,
                    this.bloodType,
                    this.department,
                    this.absence],
                    order: [
                        [{ model: this.absence }, 'datetime', 'desc']
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
                    where: { QRid: id },
                    include: [this.gender,
                    this.bloodType,
                    this.department,
                    this.absence],
                    order: [
                        [{ model: this.absence }, 'datetime', 'desc']
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
            const result = await this.absence.findAll(
                {
                    where: {
                        datetime: {
                            [Op.like]: `%${date}%`,
                        }
                    },
                    include: { model: this.user, attributes: ['Name'] },
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
            const result = await this.absence.create(
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
                        Name: {
                            [Op.like]: `%${name}%`
                        }
                    },
                    attributes: ['Name'],
                    include: {
                        separate: true,
                        model: this.absence,
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