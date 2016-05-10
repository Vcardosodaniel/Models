'use strict';

var SalesOrderController = require('../controllers/salesOrderCtrl');

exports.register = function(server, options, next) {

  var SalesOrderController = new SalesOrderController(server);
  server.bind(SalesOrderController);

  server.route([{
    method: 'GET',
    path: '/api/salesOrder',

    config: {
      handler: SalesOrderController.list,
      auth: false,
      description: 'Returns all salesOrder for display.',
      tags: ['api', 'salesOrder', 'get']
    }
  }, {
    method: 'GET',
    path: '/api/salesOrder/{id}',
    config: {
      auth: false,
      handler: SalesOrderController.show,
      description: 'Returns just a salesOrder for display based on the query parameter',
      tags: ['api', 'salesOrder', 'get', 'id']
    }
  }, {
    method: 'POST',
    path: '/api/salesOrder',
    config: {
      handler: SalesOrderController.create,
      auth: false,   
      description: 'Save the salesOrder as salesOrder',
      tags: ['api', 'salesOrder', 'post']
    }
  }, {
    method: 'DELETE',
    path: '/api/salesOrder/{id}',
    config: {
      handler: SalesOrderController.remove,      
      description: 'Delete a note based on the query parameter.',
      tags: ['api', 'salesOrder', 'delete', 'id']
    }
  }]);

  next();
};

exports.register.attributes = {
  name: 'routes-salesOrder',
  version: '1.0.0'
};
