const express = require('express');
const router = express.Router();
const dbAssociation = require('../models/index');

router.use((req, res, next) => {
    express.json();
    dbAssociation();
    next();
});

module.exports = router;