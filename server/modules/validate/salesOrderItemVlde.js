var Joi = require('joi');
var salesOrderItemSchema = require('./schema/salesOrderItem');
var mongoid = require('../../common/stringConst').mongoid;

function SalesOrderItemValidate() {}

SalesOrderItemValidate.prototype = {

  show: {
    params: {
      id: Joi.string().regex(mongoid)
    }
  },

  create: {
    payload: salesOrderItemSchema
  },

  update: {
    params: {
      id: Joi.string().regex(mongoid)
    },
    payload: salesOrderItemSchema
  },

  remove: {
    params: {
      id: Joi.string().regex(mongoid)
    }
  }
};

module.exports = SalesOrderItemValidate;
