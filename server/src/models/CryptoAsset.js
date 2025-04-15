import mongoose from 'mongoose';
import { transactionSchema } from './Transaction.js';

export const CryptoAssetSchema = new mongoose.Schema(
    {
        id: { type: String, required: true },
        transactions: [transactionSchema],
    },
    { _id: false },
);
