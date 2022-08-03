import express from 'express'
import { AuthMiddleWare } from '../authMiddleWare.js';
import { Login, Register, userProfile } from '../controller/authController.js';
const router =express.Router();


router.get('/profile',AuthMiddleWare,userProfile)
router.post('/register',Register)
router.post('/login',Login)
export default router;


