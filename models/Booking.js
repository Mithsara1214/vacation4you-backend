import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    activity: { type: mongoose.Schema.Types.ObjectId, ref: 'Activity' },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    contact_number: { type: String, required: true },
    email: { type: String, required: true },
    participants_count: { type: Number, required: true },
    agent: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent' },
    date: { type: Date, required: true },
    status: { type: String, required: true },
    total_price: { type: Number, required: true },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model('Booking', bookingSchema);
