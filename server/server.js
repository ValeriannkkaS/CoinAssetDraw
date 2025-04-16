import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './src/config/mongodb.js';
import userRouter from './src/routes/userRoutes.js';

dotenv.config();

await connectDB(); // подключение к бд (не забыть запустить докер-контейнер с базой!!!!!)

const app = express();

app.use(express.json());
app.use('/api/users', userRouter);

async function main() {
    try {
        app.listen(3001, () => {
            console.log('listening on port 3001');
        });
    } catch (err) {
        console.log(err);
    }
}

main();
