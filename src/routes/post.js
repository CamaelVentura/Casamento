import { Router } from 'express';

import GuestController from '../app/controllers/GuestController';

const routesPost = new Router();

routesPost.post('/convidados', GuestController.store);

routesPost.post('/confirmar', GuestController.show);

module.exports = routesPost;
