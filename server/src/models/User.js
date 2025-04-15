import mongoose from 'mongoose';
import { PortfolioSchema } from './Portfolio.js';

const UserShema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    passwordHash: { type: String, required: true },
    portfolios: [PortfolioSchema],
});

export const User = mongoose.model('User', UserShema);
