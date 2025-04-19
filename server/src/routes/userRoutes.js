import Router from 'express';
import { body } from 'express-validator';
import UserController from '../controllers/userControllers.js';
import { authMiddleware } from '../middlewares/auth-middleware.js';

const userRouter = Router();

userRouter.post(
    '/auth/register',
    body('email').isEmail(),
    body('password').isLength({ min: 8, max: 20 }),
    UserController.registration,
);
userRouter.post('/auth/login', UserController.login);
userRouter.post('/auth/logout', UserController.logout);
userRouter.post('/auth/logout-all', UserController.logoutAll);
userRouter.get('/activate/:link', UserController.activate);
userRouter.get('/refresh', UserController.refresh);
userRouter.get('/', authMiddleware, UserController.getAllUsers);
userRouter.get('/:id', UserController.getUserById);
userRouter.put('/', UserController.updateUserById);
userRouter.delete('/:id', UserController.deleteUserById);

export default userRouter;
