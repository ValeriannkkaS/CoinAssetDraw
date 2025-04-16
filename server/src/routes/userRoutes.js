import Router from 'express';
import UserController from '../controllers/userControllers.js';

const userRouter = Router();

userRouter.post('/auth/register', UserController.register); // первоначальная версия
userRouter.post('/auth/login', UserController.login);
userRouter.get('/', UserController.getAllUsers);
userRouter.get('/:id', UserController.getUserById);
userRouter.put('/', UserController.updateUserById);
userRouter.delete('/:id', UserController.deleteUserById);

export default userRouter;
