const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const logEmitter = require('../events/logEmitter');
const User = require('../models/user.model');
const Gender = require('../models/gender.model');
const BloodType = require('../models/btype.model');
const Department = require('../models/department.model');
const moment = require('moment');

class AttendanceService {
    constructor(attendance) {
        this.attendance = attendance;
    }

    async fetchById(id, offset, limit) {
        try {
            const result = await this.attendance.findAll({
                where: {userId: id},
                limit: limit,
                offset: limit * offset,
            });

            return result;
        } catch (e) {
            logEmitter.emit('APP-ERROR', {
                logTitle: "FETCH DATE BY ID SERVICE FAILED",
                logMessage: e
            });
            throw new Error('A203');
        }
    }

    async fetchByDate(date, offset, limit) {
        try {
            const result = await this.attendance.findAll(
                {
                    where: {
                        date: {
                            [Op.like]: `%${date}%`,
                        }
                    },
                    include: { model: User, attributes: ['name'] },
                    limit: limit,
                    offset: limit * offset,
                }
            );
            // console.log(moment("2012-02", "YYYY-MM").daysInMonth());
            return result;
        } catch (e) {
            logEmitter.emit('APP-ERROR', {
                logTitle: "FETCH ABSENCE DATA BY DATE SERVICE FAILED",
                logMessage: e
            });
            throw new Error('A201');
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
            throw new Error('A202');
        }
    }
}

module.exports = AttendanceService;