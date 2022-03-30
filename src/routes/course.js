const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/course.controller')

router.get('/create',courseController.create);
router.post('/store',courseController.store);
router.get('/get',courseController.get);
router.get("/test",courseController.getCourse)
// router.get('/populate',courseController.populate);
router.get('/:slug',courseController.Show);




module.exports = router;
