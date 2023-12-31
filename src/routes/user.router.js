const { getAll, create, getOne, remove, update, verifyCode, loginUser,getLogin, changePassword,updatePassword } = require('../controllers/user.controller');
const express = require('express');
const verifyJWT = require("../utils/verifyJWT")

const userRouter = express.Router();

userRouter.route('/')
.get(verifyJWT, getAll)
.post(create);

userRouter.route("/login")
.post(loginUser)



userRouter.route("/reset_password")
.post(changePassword)

userRouter.route("/me")
.get(verifyJWT,getLogin)


userRouter.route("/reset_password/:code")
.post(updatePassword)


userRouter.route("/verify/:code")
.get(verifyCode)

userRouter.route('/:id')
.get(verifyJWT,getOne)
.delete(verifyJWT, remove)
.put(verifyJWT,update);







module.exports = userRouter;