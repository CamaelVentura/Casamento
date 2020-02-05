import { Router } from 'express';

import { store, update } from '../app/controllers/GuestController';

const routes = new Router();

routes.post('/', store);
routes.put('/:id', update);

module.exports = routes;
