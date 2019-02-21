var express = require('express');
var router = express.Router();
const {AuthControllers} = require('../Controllers');

router.get('/Login' , AuthControllers.UserLogin);
router.get('/user' , AuthControllers.tes);
router.post('/AddUser' , AuthControllers.AddUser);
module.exports = router;