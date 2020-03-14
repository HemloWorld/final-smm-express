const express = require('express');
const router = express.Router();

const User = require('../models/user.model');
const BloodType = require('../models/btype.model');
const Department = require('../models/department.model');
const Absence = require('../models/absence.model');

const UserService = require('../services/user.service');
const userService = new UserService(User, BloodType, Department, Absence);

const {getAll, getById} = require('../controllers/user.controller');

router.get('/', (req, res) => {getAll(req, res, userService)});
router.get('/:id', (req, res) => {getById(req, res, userService)});

module.exports = router;