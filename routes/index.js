const router = require('express').Router();

const authorization = require('./authorization.js');
router.use('/authorization', authorization);

module.exports = router;