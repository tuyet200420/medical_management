const express = require('express');
const router = express.Router();

const patientController = require('../app/controllers/Patient.controller')

router.post('/',patientController.post);
router.get('/',patientController.get);
// router.put('/:id',storageController.put);
// router.get('/:id',storageController.GetSlug);
// router.delete('/:id',storageController.delete)




module.exports = router;
