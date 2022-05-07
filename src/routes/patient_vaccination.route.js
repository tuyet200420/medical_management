const express = require('express');
const router = express.Router();

const patient_vaccinationController = require('../app/controllers/Patient_vaccination.controller')

router.post('/',patient_vaccinationController.post);
router.get('/',patient_vaccinationController.get);
router.put('/:id',patient_vaccinationController.put);
router.get('/:id',patient_vaccinationController.GetSlug);
router.delete('/:id',patient_vaccinationController.delete)




module.exports = router;
