var express = require('express');
var router = express.Router();
const {KamarControllers} = require('../Controllers')

router.get('/GetAllKamar' , KamarControllers.GetKamar);
router.post('/AddKamar' , KamarControllers.AddKamar );
router.put('/UpdateKamar' , KamarControllers.EditKamar);
router.delete('/DeleteKamar' , KamarControllers.DeleteKamar);
router.get('/filter1' , KamarControllers.FilterKamarByCategory)
module.exports = router;