import { mongoose, Schema } from 'mongoose';

const TokenShema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    refreshToken: { type: String, required: true },
});

export const User = mongoose.model('User', UserShema);
