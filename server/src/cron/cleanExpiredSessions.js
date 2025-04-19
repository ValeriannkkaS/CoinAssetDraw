import cron from 'node-cron';
import { TokenModel } from '../models/TokenModel.js';

export const cleanExpiredSessions = async () => {
    cron.schedule('0 0 * * *', async () => {
        console.log('выполнение задачи крон по удалению истекших сессий из БД');

        try {
            const now = new Date();
            const result = await TokenModel.deleteMany({
                expiresIn: { $lt: now },
            });

            console.log(`удалено ${result.deletedCount} истекших сессий.`);
        } catch (err) {
            console.log(err);
        }
    });
};
