import { UserModel } from '../models/User.js';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import mailServices from './mailServices.js';
import TokenServices from './tokenServices.js';
import { UserDto } from '../dtos/user.dto.js';
import tokenServices from './tokenServices.js';
import ApiError from '../exceptions/api-error.js';

class UserServices {
    async registration(email, password, username) {
        const candidate = await UserModel.findOne({ email });

        if (candidate) {
            throw ApiError.BadRequestError(
                `A user with ${email} e-mail address already exists`,
            );
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const activationLink = uuidv4();
        const sessionId = uuidv4();

        const createdUser = await UserModel.create({
            email,
            username,
            password: passwordHash,
            activationLink,
            role: 'user',
            portfolios: [],
        });
        await mailServices.sendActivationEmail(
            email,
            username,
            `${process.env.API_URL}/api/users/activate/${activationLink}`,
        );

        const userDto = new UserDto(createdUser); // создаем экземпляр payload для генерации токена
        const tokens = TokenServices.generateTokens({
            sessionId,
            ...userDto,
        }); //передаем обычный объект, а не instance UserDto
        await tokenServices.saveToken(
            userDto.id,
            tokens.refreshToken,
            sessionId,
        );

        return {
            ...tokens,
            user: userDto,
        };
    }

    async activate(activationLink) {
        const user = await UserModel.findOne({ activationLink });
        if (!user) {
            throw ApiError.BadRequestError('your link is invalid');
        }
        user.isActivated = true;
        await user.save();
    }

    async login(email, password) {
        const user = await UserModel.findOne({ email });
        if (!user) {
            throw ApiError.BadRequestError('User not found');
        }
        const isEqualPass = await bcrypt.compare(password, user.password);
        if (!isEqualPass) {
            throw ApiError.BadRequestError('invalid login or password');
        }
        const sessionId = uuidv4();
        const userDto = new UserDto(user);
        console.log(user.role);
        const tokens = TokenServices.generateTokens({
            sessionId,
            ...userDto,
        });
        await tokenServices.saveToken(
            userDto.id,
            tokens.refreshToken,
            sessionId,
        );

        await mailServices.sendNotificationEmail(email, user.username);

        return {
            ...tokens,
            user: userDto,
        };
    }

    async logout(refreshToken) {
        const result = await TokenServices.deleteSession(refreshToken);
        return result;
    }

    async logoutAll(refreshToken) {
        const user = await TokenServices.getIdByRefreshToken(refreshToken);
        const result = await TokenServices.deleteAllSessions(user);
        return result;
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError('Unauthorized');
        }
        const userData = TokenServices.validateRefreshToken(refreshToken);
        const userSession = TokenServices.findSession(refreshToken);
        if (!userSession || !userData) {
            throw ApiError.UnauthorizedError('Unauthorized');
        }
        const user = await UserModel.findOne({ _id: userData.id });
        const userDto = new UserDto(user);
        const sessionId = uuidv4();
        const tokens = TokenServices.generateTokens({
            sessionId,
            ...userDto,
        });
        await tokenServices.saveToken(
            userDto.id,
            tokens.refreshToken,
            sessionId,
        );
        await tokenServices.deleteSession(refreshToken);
        return {
            ...tokens,
            user: userDto,
        };
    }

    async updateUserById(user) {
        const updatedUser = await UserModel.findByIdAndUpdate(user._id, user, {
            new: true,
        });
        if (!updatedUser) {
            throw new Error('User not found');
        }
        return updatedUser;
    }

    async getAllUsers() {
        const users = await UserModel.find();
        return users;
    }

    async getUserById(id) {
        if (!id) {
            throw new Error('id is required');
        }
        const user = await UserModel.findById(id);
        return user;
    }

    async deleteUserById(id) {
        const deletedUser = await UserModel.findByIdAndDelete(id);
        return deletedUser;
    }
}

export default new UserServices();
