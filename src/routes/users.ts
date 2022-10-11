import { Router } from 'express';
import {
  createUser,
  loginUser,
  updateUserRecord,
  verifyUser,
  forgotPassword,
  changePassword,
  getSingleUser,
  getAllUser,
  creditUserWallet,
  createAdmin,
} from '../controllers/userController';
import { auth } from '../middleware/auth';
const router = Router();

router.post('/register', createUser);
router.post('/createAdmin', auth, createAdmin);
router.get('/verify/:token', verifyUser);
router.get('/single-user/:id', getSingleUser);
router.post('/login', loginUser);
router.patch('/update/:id', auth, updateUserRecord);
router.post('/forgotpassword', forgotPassword);
router.patch('/change-password/:id', changePassword);
router.get('/getAllUsers', getAllUser);
router.patch('/creditWallet', auth, creditUserWallet);

export default router;
