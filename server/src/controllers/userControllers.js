import { User } from '../models/User.js';

class UserController {
    async register(req, res) {
        try {
            const { email, passwordHash, portfolios } = req.body;
            const user = await User.create({ email, passwordHash, portfolios });
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json({ err });
        }
    }

    async login(req, res) {
        //////пока что просто проставка
        try {
            const { email, passwordHash, portfolios } = req.body;
            res.status(200).json({ email, passwordHash, portfolios });
        } catch (err) {
            res.status(500).json({ err });
        }
    }

    async updateUserById(req, res) {
        try {
            const user = req.body;
            if (!user._id) {
                return res.status(404).json({ err: 'Post not found' });
            }
            const updatedUser = await User.findByIdAndUpdate(user._id, user, {
                new: true,
            });
            return res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json({ err });
        }
    }

    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            return res.status(200).json(users);
        } catch (err) {
            res.status(500).json({ err });
        }
    }

    async getUserById(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findById(id);
            return res.status(200).json(user);
        } catch (err) {
            res.status(500).json({ err });
        }
    }

    async deleteUserById(req, res) {
        try {
            const { id } = req.params;
            const deletedUser = await User.findByIdAndDelete(id);
            return res.status(200).json(deletedUser);
        } catch (err) {
            res.status(500).json({ err });
        }
    }
}

export default new UserController();
