import UserServices from '../services/userServices.js';

class UserController {
    async registration(req, res, next) {
        try {
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
            res.status(500).json(err.message);
        }
    }

    async login(req, res, next) {
        //////пока что просто проставка
        try {
            const user = await UserServices.login(req.body);
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json({ err });
        }
    }

    async logout(req, res, next) {
        try {
        } catch (err) {}
    }

    async refresh(req, res, next) {
        try {
        } catch (err) {}
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            await UserServices.activate(activationLink);
            return res.redirect(process.env.CLIENT_URL); //потом можно сделать отдельную страничку с показом успешного подтверждения
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async updateUserById(req, res) {
        try {
            const updatedUser = await UserServices.updateUserById(req.body);
            return res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async getAllUsers(req, res) {
        try {
            const users = await UserServices.getAllUsers();
            return res.status(200).json(users);
        } catch (err) {
            res.status(500).json({ err });
        }
    }

    async getUserById(req, res) {
        try {
            const user = await UserServices.getUserById(req.params.id);
            return res.status(200).json(user);
        } catch (err) {
            res.status(500).json({ err });
        }
    }

    async deleteUserById(req, res) {
        try {
            const deletedUser = await UserServices.deleteUserById(
                req.params.id,
            );
            return res.status(200).json(deletedUser);
        } catch (err) {
            res.status(500).json({ err });
        }
    }
}

export default new UserController();
