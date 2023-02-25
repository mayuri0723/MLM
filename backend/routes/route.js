import express from 'express';
import {getAllDoc} from '../controllers/userController.js';
const router = express.Router();

router.get('/user', getAllDoc)

export default router