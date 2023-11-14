import express from 'express';
import { agentRegister, agentLogin } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', agentRegister);
router.post('/login', agentLogin);

export default router;
