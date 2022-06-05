const express = require('express');
const router = express.Router();

const messageController = require('../app/controllers/Message.controller')

router.post('/',messageController.post);
router.get('/',messageController.get);
router.put('/:id',messageController.put);
router.get('/:id',messageController.GetSlug);
router.delete('/:id',messageController.delete)




module.exports = router;
