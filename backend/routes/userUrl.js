const express = require('express');
const { registerUser, getUserInfo,loginUser, getUserById, updateUser, deleteUser, getUserByEmail } = require('../controller/user.controller');
const router = express.Router();

router.post('/user', registerUser);
router.get('/user', getUserInfo);
router.get('/user/:id', getUserById);
router.post('/user/login', loginUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);


module.exports = router;
