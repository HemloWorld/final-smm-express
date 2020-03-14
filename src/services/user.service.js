class UserService {
    constructor(user, bloodType, department, absence) {
        this.user = user;
        this.bloodType = bloodType;
        this.department = department;
        this.absence = absence;
    }

    async fetchAll() {
        try {
            const result = await this.user.findAll(
                {
                    include: [this.bloodType,
                    this.department,
                    this.absence]
                });
            // const result = await this.department.findAll({include: [{model: this.user, include: this.bloodType}]});
            return result;
        } catch (e) {
            //add logger
            console.log(e);
            throw (e);
        }

    }

    async fetchById(uid) {
        try {
            const result = await this.user.findOne(
                {
                    where: {id: uid},
                    include: [this.bloodType,
                    this.department,
                    this.absence]
                });
            return result;
        } catch (e) {
            //add logger
            console.log(e);
            throw (e);
        }
    }

    async fetchByNfcId(uid) {
        //pass
    }
}

module.exports = UserService;