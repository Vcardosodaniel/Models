var Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

var salesOrderItemSchema = {

 salesOrderItem: Joi.object({
    justice: Joi.objectId(),
    description: Joi.string(),
    customer: Joi.objectId(),
    responsible: Joi.string(),
    file: Joi.objectId(),
    filename: Joi.string(),

    idsalesOrderItem: Joi.string(),
	idsalesOrderItemLink: Joi.string(),
	type: {
		identifier: Joi.string(),
		initials: Joi.string(),
		description: Joi.string(),
		active: Joi.boolean(),
		allowedAttorney: Joi.boolean(),
	},
	dateTime: Joi.string(),
	mimeType: Joi.string(),
	secretLevel: Joi.string(),
  })

};

module.exports = salesOrderItemSchema;
