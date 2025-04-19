import Router from 'express';
import { body } from 'express-validator';
import UserController from '../controllers/userControllers.js';
import { authMiddleware } from '../middlewares/auth-middleware.js';
import { roleMiddleware } from '../middlewares/role-middleware.js';

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
userRouter.get(
    '/',
    authMiddleware,
    roleMiddleware(['admin']),
    UserController.getAllUsers,
);
userRouter.get(
    '/:id',
    authMiddleware,
    roleMiddleware(['admin']),
    UserController.getUserById,
);
userRouter.put('/', authMiddleware, UserController.updateUserById);
userRouter.delete(
    '/:id',
    authMiddleware,
    roleMiddleware(['admin']),
    UserController.deleteUserById,
);

export default userRouter;
