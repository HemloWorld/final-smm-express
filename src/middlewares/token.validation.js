const jwt = require('jsonwebtoken');
const moment = require('moment');

const tokenValidation = (req, res, next) => {
    const {authorization} = req.headers;
    if (authorization) {
        if (authorization.startsWith('Bearer ')) {
            const token = authorization.slice(7, authorization.length);
            jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
                if (err) {
                    res.sendStatus(401);
                } else {
                    const decodedToken = decoded;
                    console.log(moment(new Date(decodedToken.exp * 1000)).format('YYYY-MM-DD HH:MM:ss'))
                    if (Date.now() >= new Date(decodedToken.exp * 1000)) {
                        res.sendStatus(401)
                    } else {
                        next();
                    }

                }
            });
        }
    } else {
        res.sendStatus(401);
    }

};

module.exports = tokenValidation;