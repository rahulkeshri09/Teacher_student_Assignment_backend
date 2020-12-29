const express=require('express');
const router=express.Router();
const teacherController=require('../controllers/teacher');
router.post('/create',teacherController.create);
router.post('/login',teacherController.login);
router.post('/update',teacherController.update);
module.exports=router;