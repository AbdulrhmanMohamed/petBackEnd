import express from 'express'
import { AuthMiddleWare } from '../authMiddleWare.js';
import { deleteUser, getAllUsers, getUserById, updateUser } from '../controller/userController.js';

const router =express.Router();

router.get('/all',getAllUsers)
router.get('/:id',getUserById)
router.put('/update',AuthMiddleWare,updateUser)
router.delete('/delete',deleteUser)
export default router;