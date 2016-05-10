'use strict';

var ProductStockController = require('../controllers/productStockCtrl');

exports.register = function(server, options, next) {

  var ProductStockController = new ProductStockController(server);

  server.bind(ProductStockController);

  server.route([
  {
    method: 'POST',
    path: '/api/productStock/upload',
    config: {
      auth: false,
      handler: ProductStockController.upload,
      payload: {
        output: 'stream',
        parse: true,
        allow: 'multipart/form-data',
        maxBytes: 10485760,
      }
    }
  },
  {
    method: 'GET',
    path: '/api/productStock/{id}',
    config: {
      handler: ProductStockController.show,
      auth: false,
      cache: {
        expiresIn: 5000, // 5 seconds
        privacy: 'private'
      }
    }
  }


  ]);
  next();
};

exports.register.attributes = {
  name: 'routes-productStock',
  version: '1.0.0'
};
