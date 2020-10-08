import Router from 'koa-router';

import todo from './todo.routes';

const root = new Router();

root.all('/api/', async (ctx, next) => {
  ctx.body = { message: 'Hello World (api)' }
})

root.all('/', async (ctx, next) => {
  ctx.body = { message: 'Hello World (root)' }
})

root.use('/api/todo', todo.routes(), todo.allowedMethods());

export default root;
