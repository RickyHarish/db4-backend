import express from 'express';
import { getUserProfile, updateUserProfile } from '../controllers/profileController.js';

const router = express.Router();
router.get('/profile/:id', getUserProfile);
router.put('/profile/:id', updateUserProfile);

export default router
