const express = require('express');
const router = express.Router();

const Attendance = require('../models/attendance.model');

const AttendanceService = require('../services/attendance.service');
const attendanceService = new AttendanceService(Attendance);

const { newAbsence, getAttendance } = require('../controllers/attendance.controller');

router.get('/attendance/:type', (req, res, next) => getAttendance(req, res, next, attendanceService));
router.post('/:id/submit', (req, res) => newAbsence(req, res, attendanceService));

module.exports = router;