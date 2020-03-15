const connection = require('./dbConn');
const User = require('../src/models/user.model');
const BloodType = require('../src/models/btype.model');
const Department = require('../src/models/department.model');
const Absence = require('../src/models/absence.model');
const Gender = require('../src/models/gender.model');
const dbAssociation = require('../src/models/index');
const moment = require('moment');
const dotenv = require('dotenv');

dotenv.config();
const dbMigrate = async () => {
    dbAssociation();
    await connection.sync({ force: true });

    const btype1 = await BloodType.create({ Type: 'A', id: 0 });
    const btype2 = await BloodType.create({ Type: 'B', id: 0 });
    const btype3 = await BloodType.create({ Type: 'O', id: 0 });
    const btype4 = await BloodType.create({ Type: 'AB', id: 0 });

    const depart1 = await Department.create({ Name: 'Miner', businessId: 'A01' });
    const depart2 = await Department.create({ Name: 'K3', businessId: 'A02' });
    const depart3 = await Department.create({ Name: 'Research', businessId: 'A03' });

    const gender1 = await Gender.create({ gender: 'Male' , id: 0});
    const gender2 = await Gender.create({ gender: 'Female' , id: 0});

    const user1 = await User.create({
        Name: 'Rio Arswendo',
        Birth: '2000-12-14',
        Email: 'r.arswendo.r@gmail.com',
        Phone: '08986995760',
        PhotoUrl: 'https://dummyimage.com/600x400/000/fff',
    });

    await user1.setBloodType(btype4);
    await user1.setDepartment(depart3);
    await user1.setGender(gender1);

    const user2 = await User.create({
        Name: 'Ruslan',
        Birth: '2001-01-21',
        Email: 'ruslanou@gmail.com',
        Phone: '089883795760',
        PhotoUrl: 'https://dummyimage.com/600x400/000/fff',
    });

    await user2.setBloodType(btype1);
    await user2.setDepartment(depart1);
    await user2.setGender(gender1);

    const user3 = await User.create({
        Name: 'Afina',
        Birth: '2003-1-2',
        Email: 'afinaisme@gmail.com',
        Phone: '08986783623',
        PhotoUrl: 'https://dummyimage.com/600x400/000/fff',
    });

    await user3.setBloodType(btype2);
    await user3.setDepartment(depart2);
    await user3.setGender(gender2);

    const user4 = await User.create({
        Name: 'Aris',
        Birth: '1994-10-9',
        Email: 'aris@gmail.com',
        Phone: '08986938760',
        PhotoUrl: 'https://dummyimage.com/600x400/000/fff',
    });

    await user4.setBloodType(btype3);
    await user4.setDepartment(depart3);
    await user4.setGender(gender1);

    const user5 = await User.create({
        Name: 'Dennis',
        Birth: '2000-2-12',
        Email: 'dennis@gmail.com',
        Phone: '089868463923',
        PhotoUrl: 'https://dummyimage.com/600x400/000/fff',
    });

    await user5.setBloodType(btype1);
    await user5.setDepartment(depart1);
    await user5.setGender(gender1);

    const abs1 = await Absence.create({ datetime: moment().format(process.env.DATE_FORMAT) });
    const abs2 = await Absence.create({ datetime: moment().format(process.env.DATE_FORMAT) });
    const abs3 = await Absence.create({ datetime: moment().format(process.env.DATE_FORMAT) });
    const abs4 = await Absence.create({ datetime: moment().format(process.env.DATE_FORMAT) });
    const abs5 = await Absence.create({ datetime: moment().format(process.env.DATE_FORMAT) });
    const abs6 = await Absence.create({ datetime: moment().format(process.env.DATE_FORMAT) });
    const abs7 = await Absence.create({ datetime: moment().format(process.env.DATE_FORMAT) });
    const abs8 = await Absence.create({ datetime: moment().format(process.env.DATE_FORMAT) });

    await abs1.setUser(user1);
    await abs6.setUser(user1);
    await abs7.setUser(user1);
    await abs8.setUser(user1);
    await abs2.setUser(user2);
    await abs3.setUser(user3);
    await abs4.setUser(user4);
    await abs5.setUser(user5);
}

dbMigrate();

module.exports = dbMigrate;