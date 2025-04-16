import Router from 'express';
import UserController from '../controllers/userControllers.js';

const userRouter = Router();

userRouter.post('/', UserController.register); // первоначальная версия
userRouter.get('/', async (req, res) => {});
userRouter.get('/:id', async (req, res) => {});
userRouter.put('/:id', async (req, res) => {});
userRouter.delete('/:id', async (req, res) => {});

export default userRouter;
