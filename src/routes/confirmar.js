import { Router } from 'express';

import { show } from '../app/controllers/GuestController';
import { update } from '../app/controllers/ConfirmController';

const routes = new Router();

routes.post('/', show);
routes.put('/:id', update);

module.exports = routes;
