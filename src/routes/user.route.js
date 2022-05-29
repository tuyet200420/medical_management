const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/User.controller')

router.post('/',userController.post);
router.get('/',userController.get);
router.put('/:id',userController.put);
router.get('/:id',userController.GetSlug);
router.delete('/:id',userController.delete)
router.post('/login',userController.login)




module.exports = router;
