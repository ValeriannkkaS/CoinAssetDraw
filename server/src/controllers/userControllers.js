import UserServices from '../services/userServices.js';
import { validationResult } from 'express-validator';
import ApiError from '../exceptions/api-error.js';
import userServices from '../services/userServices.js';

class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(
                    ApiError.BadRequestError(
                        'Validation Error',
                        errors.array(),
                    ),
                );
            }
            const { email, password, username } = req.body;
            const userData = await UserServices.registration(
                email,
                password,
                username,
            );
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 2.592e9, // 30 дней
                httpOnly: true,
            });
            return res.status(200).json(userData);
        } catch (err) {
            next(err);
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const userData = await UserServices.login(email, password);
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 2.592e9, // 30 дней
                httpOnly: true,
            });
            return res.status(200).json(userData);
        } catch (err) {
            next(err);
        }
    }

    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const result = await UserServices.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    }

    async logoutAll(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const result = await userServices.logoutAll(refreshToken);
            res.clearCookie('refreshToken');
            return res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    }

    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const userData = await UserServices.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 2.592e9, // 30 дней
                httpOnly: true,
            });
            return res.status(200).json(userData);
        } catch (err) {
            next(err);
        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            await UserServices.activate(activationLink);
            return res.redirect(process.env.CLIENT_URL); //потом можно сделать отдельную страничку с показом успешного подтверждения
        } catch (err) {
            next(err);
        }
    }

    async updateUserById(req, res, next) {
        try {
            const updatedUser = await UserServices.updateUserById(req.body);
            return res.status(200).json(updatedUser);
        } catch (err) {
            next(err);
        }
    }

    async getAllUsers(req, res, next) {
        try {
            const users = await UserServices.getAllUsers();
            return res.status(200).json(users);
        } catch (err) {
            next(err);
        }
    }

    async getUserById(req, res, next) {
        try {
            const user = await UserServices.getUserById(req.params.id);
            return res.status(200).json(user);
        } catch (err) {
            next(err);
        }
    }

    async deleteUserById(req, res, next) {
        try {
            const deletedUser = await UserServices.deleteUserById(
                req.params.id,
            );
            return res.status(200).json(deletedUser);
        } catch (err) {
            next(err);
        }
    }
}

export default new UserController();
