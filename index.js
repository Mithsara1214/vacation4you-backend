import express from 'express';
import connect from './database.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import activityRoutes from './routes/activities.js';
import authRoutes from './routes/auth.js';
import bookingRoutes from './routes/bookings.js';

const app = express();
const PORT = 5000;

app.use(cookieParser());
app.use(cors());
app.use(express.json());

//Agent Route
app.use('/api/auth', authRoutes);

//Activity Routes
app.use('/api/activities', activityRoutes);

//Booking Routes
app.use('/api/bookings', bookingRoutes);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const start = async () => {
  try {
    await connect();
    app.listen(PORT, () =>
      console.log(`Server running on port: http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
