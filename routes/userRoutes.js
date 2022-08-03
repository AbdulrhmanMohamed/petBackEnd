import express from 'express'
import { AuthMiddleWare } from '../authMiddleWare.js';
import { getAllUsers, getUserById, updateUser } from '../controller/userController.js';

const router =express.Router();

router.get('/all',getAllUsers)
router.get('/:id',getUserById)
router.put('/update',AuthMiddleWare,updateUser)
export default router;