import ApiError from '../exceptions/api-error.js';

export const errorMiddleware = (err, req, res, next) => {
    console.log(err);
    if (err instanceof ApiError) {
        return res
            .status(err.status || 500)
            .json({ message: err.message, errors: err.errors });
    }
    return res.status(500).json(err.message);
};
