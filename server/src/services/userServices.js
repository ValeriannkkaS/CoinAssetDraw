import { User } from '../models/User.js';

class UserServices {
    async register(user) {
        const registeredUser = await User.create(user);
        return registeredUser;
    }

    async login(user) {
        //////пока что просто проставка
        const registeredUser = await User.create(user);
        return registeredUser;
    }

    async updateUserById(user) {
        const updatedUser = await User.findByIdAndUpdate(user._id, user, {
            new: true,
        });
        if (!updatedUser) {
            throw new Error('User not found');
        }
        return updatedUser;
    }

    async getAllUsers() {
        const users = await User.find();
        return users;
    }

    async getUserById(id) {
        if (!id) {
            throw new Error('id is required');
        }
        const user = await User.findById(id);
        return user;
    }

    async deleteUserById(id) {
        const deletedUser = await User.findByIdAndDelete(id);
        return deletedUser;
    }
}

export default new UserServices();
