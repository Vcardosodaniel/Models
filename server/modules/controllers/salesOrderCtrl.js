'use strict';

const Boom = require('boom');
const q = require('bluebird');
const CommonError = require('../../error/commonErrors');
const Reply = require('../../helper/reply');
const Util = require('../../helper/util');


class SalesOrderController {
	
	constructor(server){
		this.server = server;
	}

	get salesOrderServices(){
		return this.server.plugins['services'].SalesOrderServices;
	}

	list(request, reply) {
		let limit = request.query.limit;
		let page = request.query.page;

		if(typeof limit === 'undefined' || limit === null || limit ===0) {
			limit = 10;
		}
		if(typeof page === 'undefined' || limit === null || limit ===0) {
			limit = 10;
		}

		let query = {};
		if (request.query.productStock) {
			query = {'productStock': request.query.productStock};
		}

		q.join(this.salesOrderServices.find(query,limit, page), this.salesOrderServices.count(), function(models, count) {
        return Util.paged(Util.formatJson('salesOrder', models), Math.ceil(count / limit));
	      }).then(reply)
	      .catch(CommonError.QueryError, Reply.Error(reply));
		  }

		show(request, reply) {
		    var id = request.params.id;
		    this.salesOrderServices.getById(id)
		    .then((model) => Util.formatJson('salesOrder', model))
		    .then(reply)
		    .catch(CommonError.QueryError, Reply.Error(reply))
		    .catch(CommonError.ModelNotFound, Reply.Error(reply, 404));
		}

		create(request, reply) {
		  this.salesOrderServices.create(request.payload.salesOrder)
		    .then((model) => Util.formatJson('salesOrder', model))
		    .then(reply)
		    .catch(CommonError.ValidationError, Reply.ValidationError(reply));
		}

		update(request, reply) {
		    try {
		      reply(this.salesOrderServices.update(request.params.id, request.payload.salesOrder));
		    } catch (e) {
		      reply(Boom.notFound(e.message));
		    }
		}

		remove(request, reply) {
		    try {
		      reply(this.salesOrderServices.removeById(request.params.id)).code(204);
		    } catch (e) {
		      reply(Boom.notFound(e.message));
		}
	}
}

module.exports = SalesOrderControllers;