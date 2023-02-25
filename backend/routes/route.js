import express from 'express';
import {addUserDetails} from '../controllers/userController.js';
const router = express.Router();

router.route('/adduser').post(addUserDetails)

export default router