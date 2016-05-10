'use strict';

var SalesOrderItemController = require('../controllers/salesOrderItemCtrl');
var SalesOrderItemValidator = require('../validate/salesOrderItemVlde');

exports.register = function(server, options, next) {

  var SalesOrderItemController = new SalesOrderItemController(server);
  var SalesOrderItemValidator = new SalesOrderItemValidator();

  server.bind(SalesOrderItemController);

  server.route([{
    method: 'GET',
    path: '/api/salesOrderItems',
    config: {
      handler: SalesOrderItemController.list,
      description: 'Returns all salesOrderItems for display.',
      tags: ['api', 'salesOrderItems', 'get'],
      cache: {
        expiresIn: 10000, 
        privacy: 'private'
      }
    }
  }, {
    method: 'POST',
    path: '/api/salesOrderItems',
    config: {
      handler: SalesOrderItemController.create,
      validate: SalesOrderItemValidator.create
    }
  }, {
    method: 'DELETE',
    path: '/api/salesOrderItems/{id}',
    config: {
      handler: SalesOrderItemController.remove,
      validate: SalesOrderItemValidator.remove,
      description: 'Delete a salesOrderItem based on the query parameter.',
      tags: ['api', 'salesOrderItems', 'delete', 'id']
    }
  }]);
  next();
};

exports.register.attributes = {
  name: 'routes-salesOrderItems',
  version: '1.0.0'
};
