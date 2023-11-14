import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    price: { type: Number, required: true },
    type: { type: String, required: true },
    rating: { type: Number, required: true },
    destination: { type: String, required: true },
    min_age: { type: Number, required: true },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model('Activity', activitySchema);
