import Booking from '../models/Booking.js';

export const addBooking = async (req, res, next) => {
  try {
    const booking = req.body;
    const newBooking = new Booking(booking);
    await newBooking.save();
    res.status(201).json({ message: 'Booking created successfully' });
  } catch (err) {
    next(err);
  }
};

export const getBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({ bookings });
  } catch (err) {
    next(err);
  }
};

export const getOneBooking = async (req, res, next) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found',
      });
    }
    return res.status(200).json({
      success: true,
      data: booking,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.booking,
    });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findByIdAndDelete(id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json({ message: 'Booking deleted', data: booking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
