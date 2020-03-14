const express = require('express');
const router = express.Router();

const userRoute = require('./user.route');
const scanRoute = require('./scan.route');
const logRoute = require('./log.route');
const noRoute = require('./no.route');


router.use(logRoute);
// router.use('/auth', authRoute);
router.use('/p', userRoute);
router.use('/s', scanRoute);
//TODO: Make Abs endpoint to get by date and submit new absence
router.use(noRoute);

module.exports = router;