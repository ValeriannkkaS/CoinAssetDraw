import { User } from '../models/User.js';

class UserController {
    async register(req, res) {
        try {
            const { email, passwordHash, portfolios } = req.body;
            const user = await User.create({ email, passwordHash, portfolios });
            res.status(200).json(user);
        } catch (e) {
            res.status(500).json({ e });
        }
    }
    async login(req, res) {}
    async updateUserById(req, res) {}
    async getAllUsers() {}
    async getUserById(req, res) {}
    async deleteUserById(req, res) {}
}

export default new UserController();
