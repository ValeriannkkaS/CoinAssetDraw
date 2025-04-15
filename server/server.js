// server/server.js
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './src/config/mongodb.js';

dotenv.config();

await connectDB(); // подключение к бд (не забыть запустить докер-контейнер с базой!!!!!)

const app = express();
app.use(express.json());

async function main() {
    app.post('/', (req, res) => {
        console.log(req.body);
        res.status(200).json('Сервер работает');
    });

    app.listen(3001, () => {
        console.log('listening on port 3001');
    });
}

main();
