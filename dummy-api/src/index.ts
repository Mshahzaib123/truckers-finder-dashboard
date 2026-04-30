import * as jsonServer from 'json-server';

import { api } from './api';

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router(api);
const port = 3001;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
