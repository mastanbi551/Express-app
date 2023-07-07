//customer related api's
const router = require('express').Router();

router.get('/', function(req, res) {
    res.send('Customers list')
})

module.exports = router