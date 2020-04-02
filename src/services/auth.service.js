const jwt = require('jsonwebtoken');
const logEmitter = require('../events/logEmitter');
const dotenv = require('dotenv');

dotenv.config();
class AuthService {
    constructor(user) {
        this.user = user;
    }

    async auth(user) {
        try {
            const { email } = user;
            let authUser = await this.user.findOne({ where: { email: email } });
            if (authUser) {
                const accessToken = jwt.sign({
                    name: authUser.name,
                    email: authUser.email,
                }, process.env.SECRET_KEY, {
                    expiresIn: process.env.TOKEN_EXPIRY,
                    algorithm: 'HS256'
                });
                authUser = {
                    id: authUser.id,
                    nfcId: authUser.nfcId,
                    qrId: authUser.qrId,
                    name: authUser.name,
                    email: authUser.email,
                    token: accessToken,
                }
                return authUser;
            } else {
                return authUser = null;
            }
        } catch (e) {
            logEmitter.emit('APP-ERROR', {
                logTitle: "AUTH SERVICE FAILED",
                logMessage: e
            });
            throw new Error('Z201');
        }

    }
}

module.exports = AuthService;