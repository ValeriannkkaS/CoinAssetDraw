import { mongoose, Schema } from 'mongoose';

const TokenShema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    sessionId: { type: String, required: true },
    refreshToken: { type: String, required: true },
    expiresIn: { type: Date, required: true },
});

export const TokenModel = mongoose.model('Token', TokenShema);
