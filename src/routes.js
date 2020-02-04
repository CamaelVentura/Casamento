import express from 'express';

import routesGet from './routes/get';
import routesPost from './routes/post';
import routesPut from './routes/put';

const app = express();

app.use(routesGet);
app.use(routesPost);
app.use(routesPut);

module.exports = app;
