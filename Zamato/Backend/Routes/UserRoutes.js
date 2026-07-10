const {CreateUser, GetAllUser,DeleteUser,Login}=require('../Controller/UserController');
const express = require('express');
const router=express.Router();

router.post('/signup', CreateUser);
router.get('/all',GetAllUser);
router.delete('/:id',DeleteUser);
router.post('/login',Login)

module.exports=router;