const User = require('./user.model');
const BloodType = require('./btype.model');
const Department = require('./department.model');
const Absence = require('./absence.model');

const dbAssociation = () => {
    Department.hasMany(User);
    User.belongsTo(Department);

    BloodType.hasMany(User);
    User.belongsTo(BloodType);

    User.hasMany(Absence);
    Absence.belongsTo(User);
};

module.exports = dbAssociation;