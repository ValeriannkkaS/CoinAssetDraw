import mongoose from 'mongoose';
import { CryptoAssetSchema } from './CryptoAsset.js';

export const PortfolioSchema = new mongoose.Schema({
    name: { type: String, required: true },
    assets: [CryptoAssetSchema],
});
