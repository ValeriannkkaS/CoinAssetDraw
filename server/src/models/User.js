import mongoose from 'mongoose';
import { PortfolioSchema } from './Portfolio.js';

const UserShema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    isActivated: { type: Boolean, default: false },
    activationLink: { type: String },
    portfolios: [PortfolioSchema],
});

export const UserModel = mongoose.model('User', UserShema);
