const express = require('express');
const router = express.Router();

const userRoute = require('./user.route');
const attendanceRoute = require('./attendance.route');
const logRoute = require('./log.route');
const noRoute = require('./no.route');


router.use(logRoute);
// router.use('/auth', authRoute);
router.use('/p', userRoute);
router.use('/a', attendanceRoute);
router.use(noRoute);

module.exports = router;