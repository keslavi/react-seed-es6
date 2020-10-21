import Router from 'koa-router';

export const helloWorld = new Router();

helloWorld.all('/api/', async (ctx, next) => {
  ctx.body = { message: 'Hello World (api)' }
})


helloWorld.all('/', async (ctx, next) => {
  ctx.body = { message: 'Hello World (root)' }
})

export default helloWorld;
