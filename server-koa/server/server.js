
//const Koa = require ('koa');
import Koa from 'koa';
import body from 'koa-bodyparser';
import logger from 'koa-morgan';
import config from './config/main';
import initDB from './config/database';
import mount from 'koa-mount';
// import gql from 'koa-graphql';
// import schema from './graphql/schema';
import errorHandler from './middleware/errorhandler';
import jwt from 'koa-jwt';

import api, {helloWorld} from './routes/';
import user from './routes/user-routes';
import auth from './routes/auth';

const app = new Koa();
const port = process.env.PORT || 5001;

//initDB();

app 
  .use(logger('tiny'))
  .use(errorHandler)
  .use(async(ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
  })  
  .use(body())
  //removing auth for the purposes of the react seed
  //.use(jwt({ secret: config.secret }).unless({ path: [/^\/public/] }))
  .use(helloWorld.routes(),helloWorld.allowedMethods())
  .use(auth.routes())
  .use(auth.allowedMethods())
  .use(api.routes())
  .use(api.allowedMethods())
  .use(user.routes())
  .use(user.allowedMethods())
  // .use(mount('/graphql',gql({
  //   schema: schema,
  //   graphiql:true
  // })))


app.listen(port)
console.log(`Listening on port ${port}`);

