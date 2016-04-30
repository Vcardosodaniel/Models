'use strict';

var Boom = require('boom');
var CommonError = require('../../error/commonErrors');


class ProductStockController {

  constructor(server) {
    this.server = server;
  }

  get productStockService() {
    return this.server.plugins['services'].ProductStockService;
  }

  show(request, reply) {
    var id = request.params.id;
    this.productStockService.getById(id).then((result) => {
      result.open(function(err, gs) {
        let stream = gs.stream(true);
        reply(stream)
          .header('Content-Type', 'application/octet-stream')
          .header('Content-Disposition', 'attachment; filename='+gs.filename);
      });
    })
  }

  upload(request, reply) {
    try {
      var data = request.payload;
      reply(this.storageService.upload(data));
    } catch (e) {
      reply(Boom.notFound(e.message));
    }
  }
}

module.exports = StorageController;
