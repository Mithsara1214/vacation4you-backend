import express from 'express';
import {
  addActivity,
  getActivities,
  getOneActivity,
  deleteActivity,
} from '../controllers/activityController.js';

const router = express.Router();

router.post('/', addActivity);
router.get('/', getActivities);
router.get('/:id', getOneActivity);
router.delete('/:id', deleteActivity);

export default router;
