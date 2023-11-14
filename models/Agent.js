import mongoose from 'mongoose';

const agentSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    branch: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model('Agent', agentSchema);
