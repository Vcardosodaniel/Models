'use strict';

const Boom = require('boom');
const q = require('bluebird');

const CommonError = require('../../error/commonErrors');
const Reply = require('../../helper/reply');
const Util = require('../../helper/util');


class SalesOrderItemController {

  constructor(server) {
    this.server =server;
  }

  get salesOrderItemServices(){
   return this.server.plugins['services'].SalesOrderItemServices;
  }

  list(request, reply) {
    let limit = request.query.limit;
    let page = request.query.page;

    if (typeof limit === 'undefined' || limit === null || limit === 0) {
      limit = 10;
    }
    if (typeof page === 'undefined' || page === null || page === 0) {
      page = 1;
    }

    let query = {};
    if (request.query.justice) {
      query = {'justice':request.query.justice};
    }

    q.join(this.salesOrderItemServices.find(query,limit, page), this.salesOrderItemServices.count(), function(models, count) {
        return Util.paged(Util.formatJson('salesorderitem', models), Math.ceil(count / limit));
      }).then(reply)
      .catch(CommonError.QueryError, Reply.Error(reply));
  }

  show(request, reply) {
    var id = request.params.id;
    this.salesOrderItemServices.getById(id)
      .then((model) => Util.formatJson('salesorderitem', model))
      .then(reply)
      .catch(CommonError.QueryError, Reply.Error(reply))
      .catch(CommonError.ModelNotFound, Reply.Error(reply, 404));
  }

  create(request, reply) {
    this.salesOrderItemServices.create(request.payload.document)
      .then((model) => Util.formatJson('salesorderitem', model))
      .then(reply)
      .catch(CommonError.ValidationError, Reply.ValidationError(reply));
  }

  update(request, reply) {
    try {
      reply(this.salesOrderItemServices.update(request.params.id, request.payload.salesorderitem));
    } catch (e) {
      reply(Boom.notFound(e.message));
    }
  }

  remove(request, reply) {
    try {
      reply(this.salesOrderItemServices.removeById(request.params.id)).code(204);
    } catch (e) {
      reply(Boom.notFound(e.message));
    }
  }

}

module.exports = SalesOrderItemController;