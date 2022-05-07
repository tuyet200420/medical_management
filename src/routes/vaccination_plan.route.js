const express = require('express');
const router = express.Router();

const vaccination_planController = require('../app/controllers/Vaccination_plan.controller')

router.post('/',vaccination_planController.post);
router.get('/',vaccination_planController.get);
router.put('/:id',vaccination_planController.put);
router.get('/:id',vaccination_planController.GetSlug);
router.delete('/:id',vaccination_planController.delete)




module.exports = router;
