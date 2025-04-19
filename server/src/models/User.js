import mongoose from 'mongoose';
import { PortfolioSchema } from './Portfolio.js';

const UserShema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    isActivated: { type: Boolean, default: false },
    activationLink: { type: String },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    portfolios: [PortfolioSchema],
});

export const UserModel = mongoose.model('User', UserShema);
