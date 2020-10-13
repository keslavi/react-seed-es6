import Router from'koa-router';
import User from '../model/user.model';



/* ****************************************************************
TODO: convert from express to koa and attach

******************************************************************/
const r = new Router();

r.post('/public/user', async(ctx, next) => {
  const req = ctx.request.body;
  req.roles='Registered';

  if (!req.email || !req.password) {
    ctx.status = 400;
    ctx.body = {
      error: 'expected an object with username, password, email, name but got: ' + ctx.request.body
    }
    return;
  }
  const query = (req._id) ? { '_id': req._id } : {};
	User.findOneAndUpdate(query, req, { upsert: true, new: true }, function (err, doc) {
		if (err) {
			next(err);
		} else {
      let ret = JSON.parse(JSON.stringify(doc));
      ctx.status=200;
			ctx.body=ret;
		}
  });
  
  // ctx.request.body.password = await bcrypt.hash(ctx.request.body.password, 5);;
  // const user = getUserByUsername(ctx.request.body.username, users);
  // if (!user) {
  //   users.push(ctx.request.body);
  //   ctx.status = 200;
  //   ctx.body = {
  //     message: "success"
  //   };
  //   next();
  // } else {
  //   ctx.status = 406;
  //   ctx.body = {
  //     error: "User exists"
  //   }
  //   return;
  // }
});

r.post('/login', async(ctx, next) => {
  let user = await getUserByUsername(ctx.request.body.username, users);
  if (!user) {
    ctx.status = 401;
    ctx.body = {
      error: "bad username"
    }
    return;
  }
  const {
    password,
    ...userInfoWithoutPassword
  } = user;
  if (await bcrypt.compare(ctx.request.body.password, password)) {
    ctx.body = {
      token: jsonwebtoken.sign({
        data: userInfoWithoutPassword,
        //exp in seconds
        exp: Math.floor(Date.now() / 1000) - (60 * 60) // 60 seconds * 60 minutes = 1 hour
      }, secret)
    }
    next();
  } else {
    ctx.status = 401;
    ctx.body = {
      error: "bad password"
    }
    return;
  }
});

function getUserByUsername(username, users) {
  let user;
  for (let i = 0; i < users.length; i++) {
    user = users[i];
    if (user.username === username) {
      return user;
    }
  }
  return null;
}

export default r;
