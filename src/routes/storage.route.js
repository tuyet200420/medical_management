const express = require('express');
const router = express.Router();

const storageController = require('../app/controllers/Storage.controller')

router.post('/',storageController.post);
router.get('/',storageController.get);
router.put('/:id',storageController.put);
router.get('/:id',storageController.GetSlug);
router.delete('/:id',storageController.delete);
router.patch('/:id',storageController.PATCH)




module.exports = router;
