var Joi = require('joi');
var userSchema = require('./schema/user');
var mongoid = require('../../common/stringConst').mongoid;

function UserValidate() {}

UserValidate.prototype = {

  show: {
    params: {
      id: Joi.string().regex(mongoid)
    }
  },

  create: {
    payload: userSchema
  },

  update: {
    params: {
      id: Joi.string().regex(mongoid)
    },
    payload: userSchema
  },

  remove: {
    params: {
      id: Joi.string().regex(mongoid)
    }
  }
};

module.exports = UserValidate;
