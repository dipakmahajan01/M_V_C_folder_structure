var express = require('express');
var router = express.Router();
const usersRoutes = require('./users')

router.use('/user', usersRoutes)
module.exports = router;
