const express = require('express');
const router = express.Router();

const register_vaccinationController = require('../app/controllers/Register_vaccination.controller')

router.post('/',register_vaccinationController.post);
router.get('/',register_vaccinationController.get);
router.put('/:id',register_vaccinationController.put);
router.get('/:id',register_vaccinationController.GetSlug);
router.delete('/:id',register_vaccinationController.delete)




module.exports = router;
