import Router from "koa-router";
import User from "../model/user.model";
import { sendMail } from "../helper/mailer";
import _ from "lodash";
import encryption from "../helper/encryption";
import jwt from "jsonwebtoken";
import config from "../config/main";

const r = new Router();

r.post("/public/auth/register", async (ctx, next) => {
  const req = ctx.request.body;

  var user = new User({
    email: req.email,
    password: req.password,
    firstName: req.firstName,
    lastName: req.lastName,
    businessCode: req.businessCode,
    locationCode: req.locationCode,
    phone: req.phone,
    roles: "Register"
  });

  await user.save().then (doc =>{
    ctx.body = doc;
  });
});

r.post("/public/auth/login", async (ctx, next) => {
  var email = ctx.request.body.username || ctx.request.body.email;
  await User.findOne(
    {
      email: email
    },
    function(err, user) {
      if (err) {
        next(err);
      } else {
        if (!user) {
          ctx.body = {
            error:true,
            message: "authentication failed, user not found"
          };
        } else {
          user.comparePassword(ctx.request.body.password, function(
            err,
            isMatch
          ) {
            if (err) {
              ctx.body = {
                error: true,
                message: "authentication error (0)"
              };
            } else if (!isMatch) {
              ctx.body = {
                error: true,
                message: "password and username mismatch"
              };
            } else {
              var token = generateToken(user);
              ctx.body = {
                message: "authenticated",
                token: token,
                user: userToPoco(user)
              };
            }
          });
        }
      }
    }
  );
});

r.post("/public/auth/resetrequest", async (ctx, next) => {
  const query = { email: ctx.request.body.email };

  const min = Math.ceil(1000);
  const max = Math.floor(9999);
  const minutes = 10;
  const now = new Date();

  const update = {
    resetPasswordToken: Math.floor(Math.random() * (max - min + 1)) + min,
    resetPasswordExpires: new Date(now.getTime() + minutes * 60000)
  };

  await User.findOneAndUpdate(query, update, { new: true }, function(err, doc) {
    if (err) {
      next(err);
    } else {
      sendMail(
        doc.email,
        "reset password",
        `your reset code is ${doc.resetPasswordToken}`
      );
      ctx.status = 200;
      ctx.body = userToPoco(doc);
    }
  });
});

r.post("/public/auth/resetpass", async (ctx, next) => {
  const values = ctx.request.body;
  const query = {
    email: values.email,
    resetPasswordToken: values.resetPasswordToken,
    resetPasswordExpires: {
      $gt: new Date(new Date())
    }
  };

  const update = {
    password: encryption.encrypt(values.password),
    resetPasswordToken: null,
    resetPasswordExpires: null
  };

  await User.findOneAndUpdate(query, update, { new: true }, function(err, doc) {
    if (err) {
      next(err);
    } else {
      if (_.isEmpty(doc)) {
        ctx.status = 200;
        ctx.body = {
          error: true,
          message: "token is incorrect or time has expired for password reset"
        };
      } else {
        ctx.status = 200;
        ctx.body = userToPoco(doc);
      }
    }
  });
});

export default r;

function generateToken(user) {
  var poco = userToPoco(user);
  return jwt.sign(poco, config.secret, {
    expiresIn: 60 * 60 * 24 * 7 // in seconds
  });
}

//deprecated
function userToPoco(usr) {
  return JSON.parse(JSON.stringify(usr));
  // return {
  //   _id: usr._id,
  //   email: usr.email,
  //   firstName: usr.profile.firstName,
  //   lastName: usr.profile.lastName,
  //   phone: usr.profile.phone,
  //   roles: usr.role,
  //   businessCode: usr.profile.businessCode,
  //   locationCode: usr.profile.locationCode
  // };
}
