var express = require('express');
var router = express.Router();

/* Imports Controllers */

/* Rotas */
router.get('/home', function(req, res) {
    res.send('Home Birds World');
});





module.exports = router;
