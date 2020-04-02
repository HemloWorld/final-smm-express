const connection = require('./dbConn');
const User = require('../src/models/user.model');
const BloodType = require('../src/models/btype.model');
const Department = require('../src/models/department.model');
const Attendance = require('../src/models/attendance.model');
const Gender = require('../src/models/gender.model');
const dbAssociation = require('../src/models/index');
const moment = require('moment');
const dotenv = require('dotenv');

dotenv.config();
const dbMigrate = async () => {
    dbAssociation();
    await connection.sync({ force: true });

    const btype1 = await BloodType.create({ type: 'A', id: 0 });
    const btype2 = await BloodType.create({ type: 'B', id: 0 });
    const btype3 = await BloodType.create({ type: 'O', id: 0 });
    const btype4 = await BloodType.create({ type: 'AB', id: 0 });

    const depart1 = await Department.create({ name: 'Miner', businessId: 'A01' });
    const depart2 = await Department.create({ name: 'K3', businessId: 'A02' });
    const depart3 = await Department.create({ name: 'Research', businessId: 'A03' });

    const gender1 = await Gender.create({ gender: 'Male', id: 0 });
    const gender2 = await Gender.create({ gender: 'Female', id: 0 });

    const user1 = await User.create({
        name: 'Rio Arswendo',
        birth: '2000-12-14',
        email: 'r.arswendo.r@gmail.com',
        phone: '08986995760',
        photoUrl: 'https://dummyimage.com/600x400/000/fff&text=Rio',
    });

    await user1.setBloodType(btype4);
    await user1.setDepartment(depart3);
    await user1.setGender(gender1);

    const user2 = await User.create({
        name: 'Ruslan',
        birth: '2001-01-21',
        email: 'ruslanou@gmail.com',
        phone: '089883795760',
        photoUrl: 'https://dummyimage.com/600x400/5352/fff&text=Ruslan',
    });

    await user2.setBloodType(btype1);
    await user2.setDepartment(depart1);
    await user2.setGender(gender1);

    const user3 = await User.create({
        name: 'Afina',
        birth: '2003-01-02',
        email: 'afinaisme@gmail.com',
        phone: '08986783623',
        photoUrl: 'https://dummyimage.com/600x400/786/fff&text=Afina',
    });

    await user3.setBloodType(btype2);
    await user3.setDepartment(depart2);
    await user3.setGender(gender2);

    const user4 = await User.create({
        name: 'Aris',
        birth: '1994-10-09',
        email: 'aris@gmail.com',
        phone: '08986938760',
        photoUrl: 'https://dummyimage.com/600x400/9999/fff&text=Aris',
    });

    await user4.setBloodType(btype3);
    await user4.setDepartment(depart3);
    await user4.setGender(gender1);

    const user5 = await User.create({
        name: 'Dennis',
        birth: '2000-02-12',
        email: 'dennis@gmail.com',
        phone: '089868463923',
        photoUrl: 'https://dummyimage.com/600x400/00ff0d/fff&text=Dennis',
    });

    await user5.setBloodType(btype1);
    await user5.setDepartment(depart1);
    await user5.setGender(gender1);

    const users = [user1, user2, user3, user4, user5];

    setTimeout(async () => {
        const abs1 = await Attendance.create({ date: moment().format('YYYY-MM-DD'), time: moment().format('HH:mm:ss') });
        await abs1.setUser(user1);
        setTimeout(async () => {
            const abs2 = await Attendance.create({ date: '2020-04-01', time: moment().format('HH:mm:ss') });
            await abs2.setUser(user2);
            setTimeout(async () => {
                const abs3 = await Attendance.create({ date: moment().format('YYYY-MM-DD'), time: moment().format('HH:mm:ss') });
                await abs3.setUser(user3);
                setTimeout(async () => {
                    const abs4 = await Attendance.create({ date: '2020-04-01', time: moment().format('HH:mm:ss') });
                    await abs4.setUser(user4);
                    setTimeout(async () => {
                        const abs5 = await Attendance.create({ date: moment().format('YYYY-MM-DD'), time: moment().format('HH:mm:ss') });
                        await abs5.setUser(user5);
                        setTimeout(async () => {
                            const abs6 = await Attendance.create({ date: moment().format('YYYY-MM-DD'), time: moment().format('HH:mm:ss') });
                            await abs6.setUser(user1);
                            setTimeout(async () => {
                                const abs7 = await Attendance.create({ date: moment().format('YYYY-MM-DD'), time: moment().format('HH:mm:ss') });
                                await abs7.setUser(user1);
                                setTimeout(async () => {
                                    const abs8 = await Attendance.create({ date: moment().format('YYYY-MM-DD'), time: moment().format('HH:mm:ss') });
                                    await abs8.setUser(user1);

                                    // let x = 0;
                                    // for (i = 0; i < 200; i++) {
                                    //     await Attendance.create({ date: moment().format('YYYY-MM-DD'), time: moment().format('HH:mm:ss'), userId: users[x].id });
                                    //     if (x >= users.length - 1) {
                                    //         x = 0;
                                    //     } else x++;
                                    // }
                                }, 2000);
                            }, 2000);
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}

dbMigrate();

module.exports = dbMigrate;