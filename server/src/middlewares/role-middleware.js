import ApiError from '../exceptions/api-error.js';

export const roleMiddleware = (allowedRoles = []) => {
    return (req, res, next) => {
        try {
            const userRole = req.user?.role;
            console.log(allowedRoles, userRole);
            if (!userRole || !allowedRoles.includes(userRole)) {
                return next(
                    ApiError.ForbiddenError('Access denied for this role'),
                );
            }
            next();
        } catch (err) {
            return next(
                ApiError.ForbiddenError('Access denied: insufficient rights'),
            );
        }
    };
};
