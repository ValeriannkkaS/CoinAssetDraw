import jwt from 'jsonwebtoken';
import { TokenModel } from '../models/TokenModel.js';
import ApiError from '../exceptions/api-error.js';

class TokenServices {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
            expiresIn: '30m',
        });
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
            expiresIn: '30d',
        });
        return {
            accessToken,
            refreshToken,
        };
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            return userData;
        } catch (err) {
            return null;
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            return userData;
        } catch (err) {
            return null;
        }
    }

    async saveToken(userId, refreshToken, sessionId) {
        // сохраняем токен в бд
        const userSessions = await TokenModel.find({ user: userId });
        if (userSessions.length >= 5) {
            await TokenModel.deleteOne({ user: userId });
        }
        const existingSession = await TokenModel.findOne({
            user: userId,
            sessionId: sessionId,
        });
        if (existingSession) {
            existingSession.refreshToken = refreshToken;
            existingSession.expiresIn = new Date(Date.now() + 2.592e9); // 30 дней
            return await existingSession.save();
        }
        const token = await TokenModel.create({
            user: userId,
            sessionId,
            refreshToken,
            expiresIn: new Date(Date.now() + 2.592e9),
        });
        return token;
    }

    async deleteSession(refreshToken) {
        const userSession = await TokenModel.findOne({
            refreshToken: refreshToken,
        });
        if (!userSession) {
            throw ApiError.BadRequestError(
                'Refresh token not found or already expired',
            );
        }
        await TokenModel.deleteOne({ refreshToken: refreshToken });

        return { message: 'Refresh token has been deleted.' };
    }

    async getIdByRefreshToken(refreshToken) {
        const userSession = await TokenModel.findOne({
            refreshToken: refreshToken,
        });
        if (!userSession) {
            throw ApiError.BadRequestError(
                'Refresh token not found or already expired',
            );
        }
        return userSession.user;
    }

    async deleteAllSessions(user) {
        const userSessions = await TokenModel.find({ user: user });
        if (!userSessions) {
            throw ApiError.BadRequestError('User not found');
        }
        await TokenModel.deleteMany({ user: user });
        return { message: 'All refresh tokens has been deleted.' };
    }

    async findSession(refreshToken) {
        const userSession = await TokenModel.findOne({
            refreshToken: refreshToken,
        });
        if (!userSession) {
            return null;
        }
        return userSession;
    }
}

export default new TokenServices();
