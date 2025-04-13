// server/server.js
import express from 'express';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const app = express();


app.use(express.json());

async function init() {




    const mockDb = {
        cryptoAssets: [
            {
                id: "bitcoin",
                name: "Bitcoin",
                transactions: [
                    {
                        amount: 0.1,
                        price: 50000,
                        date: "2025-04-12"
                    }
                ]
            }
        ]
    };

    app.get('/cryptoAssets', (req, res) => {
        res.json(mockDb.cryptoAssets);
    });

    app.listen(3001, () => {
        console.log('✅ Server running on http://localhost:3001');
    });
}

init().catch(err => {
    console.error('❌ Failed to start server:', err);
});