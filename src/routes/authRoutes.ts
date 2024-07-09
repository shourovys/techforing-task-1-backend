import express from 'express';
import { authUser, registerUser } from '../controllers/authController';

const router = express.Router();

router.post('/sign_up', registerUser);
router.post('/sign_in', authUser);

export default router;
