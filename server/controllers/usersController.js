'use strict';
const config = require('../config.js');
const monk = require('monk');
const axios = require('axios');
const db = monk('localhost/wallto_db');

const User = db.get('users');

const userDB = async (userData) => {
  // console.log('userDB:', userData);
  let user = await User.findOne({email: userData.email});
  // console.log('findOne:', user);
  if (!user) {
    try {
      // console.log('new user');
      return User.insert(userData);
    } catch (e) { console.error('User.insert', e); }
  } else {
    try {
      await User.update({email: userData.email}, {
        'name': userData.name, 
        'email': userData.email, 
        'accessToken': userData.accessToken, 
        'profile_picture': userData.profile_picture
      });
      // console.log('update user');
      return User.findOne({email: userData.email});
    } catch(e) { console.error('User.update', e); }
  }
}

module.exports.auth = async (ctx, next) => {
  if ('POST' != ctx.method) return await next();
  if (ctx.request.body.network == 'facebook') {
    try {
      let authResult = await axios.get(config.facebook.validateUrl, {
        headers: {
          'Authorization': 'Bearer ' + ctx.request.body.accessToken,
        }
      });
      // console.log('authResult', authResult.data);
      if (authResult.data.id == ctx.request.body.id) {
        let user = {
          'name': ctx.request.body.name,
          'email': ctx.request.body.email,
          'accessToken': 'FB' + ctx.request.body.accessToken,
          'profile_picture': ctx.request.body.picture.data.url,
        };
        user = await userDB(user);
        console.log('user', user);
        if (user.email) {
          ctx.status = 200;
          ctx.body = JSON.stringify({'user': user});
          return;
        }
      }
    } catch(e) { console.error('Facebook validate error'); }
  } else if (ctx.request.body.network == 'google') {
    // console.log('google ctx.request.body', ctx.request.body);
    try {
      let authResult = await axios.get(config.google.validateUrl + ctx.request.body.idToken, {
        headers: {
          'Authorization': 'Bearer ' + ctx.request.body.accessToken,
        }
      });
      // console.log('authResult', authResult.data);
      if (authResult.data.sub == ctx.request.body.id) {
        let user = {
          'name': authResult.data.name,
          'email': authResult.data.email,
          'accessToken': 'GO' + ctx.request.body.accessToken,
          'profile_picture': authResult.data.picture,
        };
        user = await userDB(user);
        console.log('user', user);
        if (user.email) {
          ctx.status = 200;
          ctx.body = JSON.stringify({'user': user});
          return;
        }
      }
    } catch(e) { console.error('Google validate error'); }
  }
  ctx.status = 404;
};

module.exports.logout = async (ctx, next) => {
  if ('GET' != ctx.method) return await next();
  ctx.status = 201;
};

module.exports.me = async (ctx, next) => {
  if ('GET' != ctx.method) return await next();
  ctx.body = ctx.user;
};

