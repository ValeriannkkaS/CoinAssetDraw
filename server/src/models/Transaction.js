import mongoose from 'mongoose';

export const transactionSchema = new mongoose.Schema(
    {
        amount: { type: Number, required: true },
        price: { type: Number, required: true },
        date: { type: String, required: true },
    },
    { _id: false },
);
