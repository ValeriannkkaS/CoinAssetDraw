import Router from 'express';
import { User } from '../models/User.js';

const portfolioRouter = new Router();

portfolioRouter.post('/', async (req, res) => {});
portfolioRouter.get('/', async (req, res) => {});
portfolioRouter.get('/:id', async (req, res) => {});
portfolioRouter.put('/', async (req, res) => {});
portfolioRouter.delete('/:id', async (req, res) => {});

export default portfolioRouter;
