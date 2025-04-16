import Router from 'express';
import UserController from '../controllers/userControllers.js';

const userRouter = Router();

userRouter.post('/auth/register', UserController.registration); // первоначальная версия
userRouter.post('/auth/login', UserController.login);
userRouter.post('/auth/logout', UserController.logout);
userRouter.get('/activate/:link', UserController.activate);
userRouter.get('/refresh', UserController.refresh);
userRouter.get('/', UserController.getAllUsers);
userRouter.get('/:id', UserController.getUserById);
userRouter.put('/', UserController.updateUserById);
userRouter.delete('/:id', UserController.deleteUserById);

export default userRouter;
