"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const auth_1 = require("../middleware/auth");
const router = express_1.Router();
router.post('/register', userController_1.createUser);
router.post('/createAdmin', auth_1.auth, userController_1.createAdmin);
router.get('/verify/:token', userController_1.verifyUser);
router.get('/single-user/:id', userController_1.getSingleUser);
router.post('/login', userController_1.loginUser);
router.patch('/update/:id', auth_1.auth, userController_1.updateUserRecord);
router.post('/forgotpassword', userController_1.forgotPassword);
router.patch('/change-password/:id', userController_1.changePassword);
router.get('/getAllUsers', userController_1.getAllUser);
router.patch('/creditWallet', auth_1.auth, userController_1.creditUserWallet);
exports.default = router;
//# sourceMappingURL=users.js.map