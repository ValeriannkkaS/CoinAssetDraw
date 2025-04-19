import ApiError from '../exceptions/api-error.js';
import tokenServices from '../services/tokenServices.js';

export const authMiddleware = (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return next(ApiError.UnauthorizedError('Unauthorized.'));
        }

        const accessToken = authorizationHeader.split(' ')[1];
        if (!accessToken) {
            return next(ApiError.UnauthorizedError('Unauthorized.'));
        }
        const userData = tokenServices.validateAccessToken(accessToken);
        if (!userData) {
            return next(ApiError.UnauthorizedError('Unauthorized.'));
        }
        req.user = userData;
        next();
    } catch (err) {
        return next(ApiError.UnauthorizedError('Unauthorized'));
    }
};
