import express from 'express'
import { AuthMiddleWare } from '../authMiddleWare.js';
import { creaateFeedBack, getAllFeedBack, getFeedBackById, getUserFeedBacks, updateFeedBack } from '../controller/feedBackController.js';
import { getUserById } from '../controller/userController.js';
const router=express.Router();

router.post('/',AuthMiddleWare,creaateFeedBack)
router.get('/all',getAllFeedBack)
router.get('/userFeedBacks',AuthMiddleWare,getUserFeedBacks)
router.get('/:id',getFeedBackById)
router.put('/update:id',updateFeedBack)
export default router;