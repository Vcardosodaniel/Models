var Joi = require('joi');
var clientSchema = require('./schema/client');
var mongoid = require('../../common/stringConst').mongoid;

function ClientValidate() {}

ClientValidate.prototype = {

  show: {
    params: {
      id: Joi.string().regex(mongoid)
    }
  },

  create: {
    payload: clientSchema
  },

  update: {
    params: {
      id: Joi.string().regex(mongoid)
    },
    payload: clientSchema
  },

  remove: {
    params: {
      id: Joi.string().regex(mongoid)
    }
  }
};

module.exports = ClientValidate;
