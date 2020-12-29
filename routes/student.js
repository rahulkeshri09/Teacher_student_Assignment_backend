const express=require('express');
const router=express.Router();
const studentController=require('../controllers/student');
router.post('/create',studentController.create);
router.post('/login',studentController.login);
router.post('/update',studentController.update);
module.exports=router;