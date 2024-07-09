import express from 'express';
import {
  createJob,
  deleteJob,
  getJobs,
  updateJob,
} from '../controllers/jobController';
import { protect } from '../middlewares/authMiddleware';

const router = express.Router();

router.route('/').get(getJobs).post(protect, createJob);
router.route('/:id').put(updateJob).delete(deleteJob);

export default router;
