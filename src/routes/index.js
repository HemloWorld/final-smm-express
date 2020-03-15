const express = require('express');
const router = express.Router();

const userRoute = require('./user.route');
const scanRoute = require('./scan.route');
const absenceRoute = require('./absence.route');
const logRoute = require('./log.route');
const noRoute = require('./no.route');


router.use(logRoute);
// router.use('/auth', authRoute);
router.use('/p', userRoute);
router.use('/s', scanRoute);
router.use('/a', absenceRoute);
router.use(noRoute);

module.exports = router;