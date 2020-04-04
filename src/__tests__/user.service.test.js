const UserService = require('../services/user.service');
const User = require('../models/user.model');
const BloodType = require('../models/btype.model');
const Department = require('../models/department.model');
const Gender = require('../models/gender.model');
const Attendance = require('../models/attendance.model');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

let user;
let userService;
describe('User Service testing', () => {
    beforeAll(() => {
        user = new User();
        userService = new UserService(user);
    });

    it('should return all user data', async () => {
        user.findAll = jest.fn(() => {
            return [
                {
                    "id": "95c62880-74d1-11ea-a19c-d597478b9407",
                    "qrId": "95c62881-74d1-11ea-a19c-d597478b9407",
                    "nfcId": "95c62882-74d1-11ea-a19c-d597478b9407",
                    "name": "Rio Arswendo",
                    "birth": "2000-12-14",
                    "email": "r.arswendo.r@gmail.com",
                    "phone": "08986995760",
                    "photoUrl": "https://dummyimage.com/600x400/000/fff&text=Rio",
                    "gender": {
                        "id": 1,
                        "gender": "Male"
                    },
                    "bloodType": {
                        "id": 4,
                        "type": "AB"
                    },
                    "department": {
                        "id": "95c14680-74d1-11ea-a19c-d597478b9407",
                        "businessId": "A03",
                        "name": "Research"
                    },
                    "attendances": [
                        {
                            "id": "9fb1adb0-74d1-11ea-a19c-d597478b9407",
                            "date": "2020-04-02",
                            "time": "18:03:46",
                            "userId": "95c62880-74d1-11ea-a19c-d597478b9407"
                        },
                        {
                            "id": "9e7eabf0-74d1-11ea-a19c-d597478b9407",
                            "date": "2020-04-02",
                            "time": "18:03:44",
                            "userId": "95c62880-74d1-11ea-a19c-d597478b9407"
                        },
                        {
                            "id": "9d4c6d80-74d1-11ea-a19c-d597478b9407",
                            "date": "2020-04-02",
                            "time": "18:03:42",
                            "userId": "95c62880-74d1-11ea-a19c-d597478b9407"
                        },
                        {
                            "id": "97136900-74d1-11ea-a19c-d597478b9407",
                            "date": "2020-04-02",
                            "time": "18:03:31",
                            "userId": "95c62880-74d1-11ea-a19c-d597478b9407"
                        }
                    ]
                },
                {
                    "id": "95cda290-74d1-11ea-a19c-d597478b9407",
                    "qrId": "95cda291-74d1-11ea-a19c-d597478b9407",
                    "nfcId": "95cda292-74d1-11ea-a19c-d597478b9407",
                    "name": "Ruslan",
                    "birth": "2001-01-21",
                    "email": "ruslanou@gmail.com",
                    "phone": "089883795760",
                    "photoUrl": "https://dummyimage.com/600x400/5352/fff&text=Ruslan",
                    "gender": {
                        "id": 1,
                        "gender": "Male"
                    },
                    "bloodType": {
                        "id": 1,
                        "type": "A"
                    },
                    "department": {
                        "id": "95be8760-74d1-11ea-a19c-d597478b9407",
                        "businessId": "A01",
                        "name": "Miner"
                    },
                    "attendances": [
                        {
                            "id": "9845ce80-74d1-11ea-a19c-d597478b9407",
                            "date": "2020-04-01",
                            "time": "18:03:33",
                            "userId": "95cda290-74d1-11ea-a19c-d597478b9407"
                        }
                    ]
                },
            ]
        });

        let result = await userService.fetchAll();
        expect(user.findAll).toBeCalledTimes(1);
        expect(result).toEqual([
            {
                "id": "95c62880-74d1-11ea-a19c-d597478b9407",
                "qrId": "95c62881-74d1-11ea-a19c-d597478b9407",
                "nfcId": "95c62882-74d1-11ea-a19c-d597478b9407",
                "name": "Rio Arswendo",
                "birth": "2000-12-14",
                "email": "r.arswendo.r@gmail.com",
                "phone": "08986995760",
                "photoUrl": "https://dummyimage.com/600x400/000/fff&text=Rio",
                "gender": {
                    "id": 1,
                    "gender": "Male"
                },
                "bloodType": {
                    "id": 4,
                    "type": "AB"
                },
                "department": {
                    "id": "95c14680-74d1-11ea-a19c-d597478b9407",
                    "businessId": "A03",
                    "name": "Research"
                },
                "attendances": [
                    {
                        "id": "9fb1adb0-74d1-11ea-a19c-d597478b9407",
                        "date": "2020-04-02",
                        "time": "18:03:46",
                        "userId": "95c62880-74d1-11ea-a19c-d597478b9407"
                    },
                    {
                        "id": "9e7eabf0-74d1-11ea-a19c-d597478b9407",
                        "date": "2020-04-02",
                        "time": "18:03:44",
                        "userId": "95c62880-74d1-11ea-a19c-d597478b9407"
                    },
                    {
                        "id": "9d4c6d80-74d1-11ea-a19c-d597478b9407",
                        "date": "2020-04-02",
                        "time": "18:03:42",
                        "userId": "95c62880-74d1-11ea-a19c-d597478b9407"
                    },
                    {
                        "id": "97136900-74d1-11ea-a19c-d597478b9407",
                        "date": "2020-04-02",
                        "time": "18:03:31",
                        "userId": "95c62880-74d1-11ea-a19c-d597478b9407"
                    }
                ]
            },
            {
                "id": "95cda290-74d1-11ea-a19c-d597478b9407",
                "qrId": "95cda291-74d1-11ea-a19c-d597478b9407",
                "nfcId": "95cda292-74d1-11ea-a19c-d597478b9407",
                "name": "Ruslan",
                "birth": "2001-01-21",
                "email": "ruslanou@gmail.com",
                "phone": "089883795760",
                "photoUrl": "https://dummyimage.com/600x400/5352/fff&text=Ruslan",
                "gender": {
                    "id": 1,
                    "gender": "Male"
                },
                "bloodType": {
                    "id": 1,
                    "type": "A"
                },
                "department": {
                    "id": "95be8760-74d1-11ea-a19c-d597478b9407",
                    "businessId": "A01",
                    "name": "Miner"
                },
                "attendances": [
                    {
                        "id": "9845ce80-74d1-11ea-a19c-d597478b9407",
                        "date": "2020-04-01",
                        "time": "18:03:33",
                        "userId": "95cda290-74d1-11ea-a19c-d597478b9407"
                    }
                ]
            },
        ]);
    });

    it('should throw an error of E201', async () => {
        user.findAll = jest.fn(() => {
            throw new Error();
        });
        let result;
        try {
            result = await userService.fetchAll();
        } catch (e) {
            result = e.message;
        }

        expect(user.findAll).toBeCalledTimes(1);
        expect(result).toEqual('E201');
    });

    it('Should be called with id', async () => {
        let id = 1;
        user.findOne = jest.fn((id) => {
            return true;
        });

        let result = await userService.fetchById(1);
        expect(user.findOne).toBeCalledTimes(1);
        expect(user.findOne).toBeCalledWith({
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
        expect(result).toEqual(true);
    });

    it("Should throw an error of E202", async () => {
        user.findOne = jest.fn(() => {
            throw new Error();
        });

        let result;
        try {
            result = await userService.fetchById(1);
        } catch (e) {
            result = e.message;
        }
        expect(user.findOne).toBeCalledTimes(1);
        expect(result).toEqual('E202');
    });

    it("Should be called with nfc id", async () => {
        let id = 1;
        user.findOne = jest.fn((id) => {
            return true;
        });
        let result = await userService.fetchByNfcId(1);
        expect(user.findOne).toBeCalledTimes(1);
        expect(user.findOne).toBeCalledWith({
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
        expect(result).toEqual(true);
    });

    it("Should throw an error of E203", async () => {
        user.findOne = jest.fn(() => {
            throw new Error();
        });

        let result;
        try {
            result = await userService.fetchByNfcId(1);
        } catch (e) {
            result = e.message;
        }
        expect(user.findOne).toBeCalledTimes(1);
        expect(result).toEqual('E203');
    });

    it("Should be called with qr id", async () => {
        let id = 1;
        user.findOne = jest.fn((id) => {
            return true;
        });
        let result = await userService.fetchByQrId(1);
        expect(user.findOne).toBeCalledTimes(1);
        expect(user.findOne).toBeCalledWith({
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
        expect(result).toEqual(true);
    });

    it("Should throw an error of E204", async () => {
        user.findOne = jest.fn(() => {
            throw new Error();
        });

        let result;
        try {
            result = await userService.fetchByQrId(1);
        } catch (e) {
            result = e.message;
        }
        expect(user.findOne).toBeCalledTimes(1);
        expect(result).toEqual('E204');
    });

    it("Should be called with name", async () => {
        let name = 1;
        user.findAll = jest.fn((name) => {
            return true;
        });
        let result = await userService.fetchByName(1);
        expect(user.findAll).toBeCalledTimes(1);
        expect(user.findAll).toBeCalledWith({
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
        });
        expect(result).toEqual(true);
    });

    it("Should throw an error of E205", async () => {
        user.findAll = jest.fn(() => {
            throw new Error();
        });

        let result;
        try {
            result = await userService.fetchByName(1);
        } catch (e) {
            result = e.message;
        }
        expect(user.findAll).toBeCalledTimes(1);
        expect(result).toEqual('E205');
    });
})