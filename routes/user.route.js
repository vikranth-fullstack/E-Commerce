var express= require('express');
var userRouter=express.Router();

var UserController = require('../controllers/user.controller');

userRouter.post('/register',UserController.registerUser);
userRouter.post('/login',UserController.loginUser);
module.exports=userRouter;