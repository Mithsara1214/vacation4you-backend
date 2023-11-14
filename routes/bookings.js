import express from 'express';
import cookieJWTAuth from '../middleware/cookieJWTAuth.js';
import {
  addBooking,
  getBookings,
  getOneBooking,
  deleteBooking,
} from '../controllers/bookingController.js';
const router = express.Router();

router.post('/', cookieJWTAuth, addBooking);
router.get('/', cookieJWTAuth, getBookings);
router.get('/:id', cookieJWTAuth, getOneBooking);
router.delete('/:id', cookieJWTAuth, deleteBooking);

export default router;
