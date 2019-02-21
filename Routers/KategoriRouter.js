var express = require('express');
var router = express.Router();
const {KategoriControllers} = require('../Controllers');

router.get('/GetAllKategori' , KategoriControllers.GetKategori);
router.post('/AddKategori' , KategoriControllers.AddKategori);
router.put('/EditKategori' , KategoriControllers.EditKategori);
router.delete('/DeleteKategori' , KategoriControllers.DeleteKategori)
module.exports = router;