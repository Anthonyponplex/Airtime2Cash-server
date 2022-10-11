import { Router } from 'express';
import {
  cancelATransaction,
  createTransaction,
  getOneTransaction,
  getTransactions,
  getUserTransactions,
} from '../controllers/transactionController';
import { auth } from '../middleware/auth';

const router = Router();

router.post('/add-transaction', auth, createTransaction);
router.get('/getOneTransaction/:id', getOneTransaction);
router.get('/getUserTransactions', auth, getUserTransactions);
router.get('/getTransactions', getTransactions);
// Add query params pending=true to get ONLY successful transactions
router.patch('/cancelTransaction/:id', auth, cancelATransaction);

export default router;
