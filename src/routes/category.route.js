const express = require('express');
const router = express.Router();

const CategoryController = require('../app/controllers/Category.controller')
router.post('/',CategoryController.post);
router.get('/',CategoryController.get);
router.put('/:id',CategoryController.put);
router.delete('/:id',CategoryController.delete);
router.get('/:id',CategoryController.GetSlug);
module.exports = router;
