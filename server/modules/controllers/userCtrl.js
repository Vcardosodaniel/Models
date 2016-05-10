'use strict';

const Boom = require('boom');
const q = require('bluebird');
const CommonError = require('../../error/commonErrors');
const UserErrors= require('../../error/userErrors');
const Reply = require('../../helper/reply');
const Util = require('../../helper/util');


class UserController {

  constructor(server) {
    this.server =server;
  }

  get userServices(){
   return this.server.plugins['services'].UserServices;
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

    q.join(this.userServices.find(limit, page), this.userServices.count(), function(models, count) {
        return Util.paged(Util.formatJson('user', models), Math.ceil(count / limit));
      }).then(reply)
      .catch(CommonError.QueryError, Reply.Error(reply));
  }

  show(request, reply) {
    var id = request.params.id;
    this.userServices.getById(id)
      .then(reply)
      .catch(CommonError.QueryError, Reply.Error(reply));
  }

  create(request, reply) {
     this.userServices.create(request.payload.user)
      .then(reply)
      .catch(UserErrors.ValidationError, Reply.ValidationError(reply));

  }

  update(request, reply) {

    if (false) {
      try {
        reply(this.userServices.update(request.params.id, request.payload.user));
      } catch (e) {
        reply(Boom.notFound(e.message));
      }
    } else {
      this.userServices.create(request.payload.user)
      .then(reply)
      .catch(UserErrors.ValidationError, Reply.ValidationError(reply));
    }
  }

  remove(request, reply) {
    try {
      var id = request.params.id;
      this.userServices.removeById(id);
      reply().code(204);
    } catch (e) {
      reply(Boom.notFound(e.message));
    }
  }

}

module.exports = UserController;
