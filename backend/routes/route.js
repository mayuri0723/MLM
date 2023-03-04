import express from 'express';
import {addUserDetails} from '../controllers/userController.js';
import { authUser, registerUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', authUser);
router.post('/register', registerUser);
router.route('/adduser').post(addUserDetails)
//referral tracking API
router.route('/api/referral').post()
// revenue sharing API
router.route('/api/revenue').post()
//  reporting and analytics APIs
router.route('/api/referrals/:userID').get()
//earnings API
router.route('/api/earnings/:userID').get()
//payment API
router.router('payment processing API').post()



export default router