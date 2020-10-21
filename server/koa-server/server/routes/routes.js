import Router from 'koa-router';

import todo from './todo.routes';
import options from './option.routes';
import contact from './contact.routes';

export const root = new Router({prefix: '/api'});


//TODO: complete user routing and DB initialization
const routes =[todo,options,contact];

root.all('/api/', async (ctx, next) => {
  ctx.body = { message: 'Hello World (api)' }
})


root.all('/', async (ctx, next) => {
  ctx.body = { message: 'Hello World (root)' }
})


for (var route of routes){
  root.use(route.routes(),route.allowedMethods())
}




export default root;
