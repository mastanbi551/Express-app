//user related api's
const router = require('express').Router();

router.get('/', function(req, res) {
    res.send('users list')
})

module.exports = router