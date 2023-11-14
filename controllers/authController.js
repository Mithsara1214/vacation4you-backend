import Agent from '../models/Agent.js';
import { createError } from '../utils/error.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const agentRegister = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const agent = await Agent.create({
      ...req.body,
      password: hashedPassword,
    });
    await agent.save();
    res.status(201).json({ message: 'Agent created successfully' });
  } catch (err) {
    next(err);
  }
};

export const agentLogin = async (req, res, next) => {
  try {
    const agent = await Agent.findOne({ email: req.body.email });
    if (!agent) {
      throw createError(404, 'Agent not found');
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      agent.password
    );
    if (!validPassword) {
      throw createError(400, 'Invalid credentials');
    }
    const token = jwt.sign({ id: agent._id }, process.env.JWT_SECRET);
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).json({ message: 'Agent logged in successfully' });
  } catch (err) {
    next(err);
  }
};
