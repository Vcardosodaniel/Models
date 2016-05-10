'use strict';

var ClientController = require('../controllers/clientCtrl');
var ClientValidate = require('../validate/clientVlde');

exports.register = function(server, options, next) {

  var ClientController = new ClientController(server);
  var ClientValidate = new ClientValidate();

  server.bind(ClientController);

  server.route([{
    method: 'GET',
    path: '/api/clients',
    config: {
      handler: ClientController.list,
      description: 'Returns all clients for display.',
      tags: ['api', 'clients', 'get'],
     /* cache: {
        expiresIn: 30000, // 30 seconds
        privacy: 'private'
      }*/
    }
  }, {
    method: 'GET',
    path: '/api/clients/{id}',
    config: {
      handler: ClientController.show,
      validate: ClientValidate.show,
      description: 'Returns just a client for display based on the query parameter',
      tags: ['api', 'clients', 'get', 'id'],
      cache: {
        expiresIn: 5000, // 5 seconds
        privacy: 'private'
      }
    }
  }, {
    method: 'POST',
    path: '/api/clients',
    config: {
      handler: ClientController.create,
      //validate: ClientValidate.create,
      description: 'Save the client as client where only the "name" field is required.',
      tags: ['api', 'clients', 'post']
    }
  }, {
    method: 'PUT',
    path: '/api/clients/{id}',
    config: {
      handler: ClientController.update,
      validate: ClientValidate.update,
      description: 'Update the client as "_id" field in JSON',
      tags: ['api', 'clients', 'put', 'id']
    }
  }, {
    method: 'DELETE',
    path: '/api/clients/{id}',
    config: {
      handler: ClientController.remove,
      validate: ClientValidate.remove,
      description: 'Delete a client based on the query parameter.',
      tags: ['api', 'clients', 'delete', 'id']
    }
  }]);

  next();
};

exports.register.attributes = {
  name: 'routes-clients',
  version: '1.0.0'
};
