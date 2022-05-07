const express = require('express');
const router = express.Router();

const vaccineController = require('../app/controllers/Vaccine.controller')

router.post('/',vaccineController.post);
router.get('/',vaccineController.get);
router.get('/q',vaccineController.Search);
router.put('/:id',vaccineController.put);
router.get('/:id',vaccineController.GetSlug);
router.delete('/:id',vaccineController.delete)




module.exports = router;
