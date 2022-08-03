import express from 'express'
import { searchRes } from '../controller/searchController.js';
const router=express.Router();


router.get('/',searchRes)
export default router;