import mongoose from 'mongoose';

export const connectDB = async () => {
    const MONGO_URI = process.env.MONGO_URI;
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB Connected');
    } catch (error) {
        console.log('DB connection error: ', error.message);
        process.exit(1);
    }
};
