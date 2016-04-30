'use strict';

const Boom = require('boom');
const q = require('bluebird');
const CommonError = require('../../error/commonErrors');
const Reply = require('../../helper/reply');
const Util = require('../../helper/util');
const server = require('../../main.js');

const ClientSerializer = require('../serializers/client');

class ClientController {
	
	constructor(server) {
		this.server = server;
	}

	get clientServices() {
		return this.server.plugins['services'].ClientServices;
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

    let query ={};

    if (typeof request.query.search  !== 'undefined' ){
      let regex = new RegExp(request.query.search,'i');
      query ={'name':regex};
    }


    q.join(this.contactServices.find(query,limit, page), this.contactServices.count(), function(models, count) {
        return Util.paged(Util.formatJson('Client', models), Math.ceil(count / limit));
      }).then(reply)
      .catch(CommonError.QueryError, Reply.Error(reply));
  }

  show(request, reply) {
    var id = request.params.id;
    this.clientServices.getById(id)
      .then((model) => Util.formatJson('client', model))
      .then(reply)
      .catch(CommonError.QueryError, Reply.Error(reply))
      .catch(CommonError.ModelNotFound, Reply.Error(reply, 404));
  }

  create(request, reply) {
    this.clientServices.create(request.payload.contact)
      .then((model) => Util.formatJson('client', model))
      .then(reply)
      .catch(CommonError.ValidationError, Reply.ValidationError(reply));
  }

  update(request, reply) {
    try {
      reply(this.clientServices.update(request.params.id, request.payload.contact));
    } catch (e) {
      reply(Boom.notFound(e.message));
    }
  }

  remove(request, reply) {
    try {
      reply(this.clientServices.removeById(request.params.id)).code(204);
    } catch (e) {
      reply(Boom.notFound(e.message));
    }
  }

}

module.exports = ClientController;

