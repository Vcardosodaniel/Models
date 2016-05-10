var Joi = require('joi');
var mongoid = require('../../../common/stringConst').mongoid;

var userSchema = {
  user:{
    contact: Joi.string().regex(mongoid),
    login: Joi.string().required().email(),
    password: Joi.string().required().min(1),
    createdAt: Joi.date(),
    updatedAt: Joi.date(),
  }

};

module.exports = userSchema;
