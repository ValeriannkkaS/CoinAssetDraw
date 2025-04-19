import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connectDB } from './src/config/mongodb.js';
import userRouter from './src/routes/userRoutes.js';
import { errorMiddleware } from './src/middlewares/error-middleware.js';
import { cleanExpiredSessions } from './src/cron/cleanExpiredSessions.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api/users', userRouter);
app.use(errorMiddleware);

async function main() {
    try {
        await connectDB(); // подключение к бд (не забыть запустить докер-контейнер с базой!!!!!)
        cleanExpiredSessions();
        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`);
        });
    } catch (err) {
        console.log(err);
    }
}

main();
