'use strict';

var UserController = require('../controllers/userCtrl');
var userValidate = require('../validate/accountVlde');

exports.register = function(server, options, next) {

  var UserController = new UserController(server);
  var userValidate = new userValidate();
  
  server.bind(UserController);

  server.route([{ 
    method: 'GET',
    path: '/api/user',
    config: {
      handler: UserController.list,
      cache: {
        expiresIn : 5000, // 5 seconds
        privacy   : 'private'
      }
    }
  }, {
    method: 'GET',
    path: '/api/user/{id}',
    config: {
      handler: UserController.show,
      validate: userValidate.show,
      cache: {
        expiresIn : 5000, // 5 seconds
        privacy   : 'private'
      }
    }
  }, {
    method: 'POST',
    path: '/api/user',
    config: {
      handler: UserController.update,      
      validate: userValidate.update
    }
  }, {
    method: 'PUT',
    path: '/api/user/{id}',
    config: {
      handler: UserController.update,      
      validate: userValidate.update
    }
  }, {
    method: 'DELETE',
    path: '/api/user/{id}',
    config: {
      handler: UserController.remove,      
      validate: userValidate.remove
    }
  }]);

  next();
};

exports.register.attributes = {
  name: 'routes-user',
  version: '1.0.0'
};
