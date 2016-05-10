var Joi = require('joi');
var types = require('../../../models/types');
Joi.objectId = require('joi-objectid')(Joi);

var clientSchema = {

  client:{
    _id: Joi.objectId(),
    name: Joi.string().required().min(3),
    surname: Joi.string(),
    federalRegister: Joi.string().min(11).max(15),
    personalType: Joi.string().valid([types.TypeOfPeople]).required(),
    groups: Joi.array(),

    additional:{

      person:{
        title: Joi.string().valid(types.TypeOfTitle),      
        company: Joi.string(),      
        registrationnumber: {
          number: Joi.string(),
          issuingAgency: Joi.string(),
          province: Joi.string().valid([types.TypeOfState])
        },
        registrationProfession: Joi.string(),
        nationality: Joi.string(),
        dateOfBirth: Joi.date().max(new Date()),
        occupation: Joi.string(),
        maritalStatus: Joi.string().valid([types.TypeOfMaritalstatus]),
        fatherName: Joi.string().min(3),  
        motherName: Joi.string().min(3),
        genreSex: Joi.string().valid([types.TypeOfSex]),
        education: Joi.string().valid([types.TypeOfEducation])  
      },

      company:{
        federalactivity: Joi.string(),
        municipalactivity: Joi.string(),
        juridicalNature: Joi.string(),
        municipalRegistration: Joi.string(),
        stateRegistration: Joi.string(),
        homeActivityDate: Joi.date()
      }
    },

    touch: {
      phones: Joi.array().items(Joi.object().keys({
        typeOfPhone: Joi.string().valid([types.TypeOfPhone]),
        number: Joi.string().min(8),
        active: Joi.boolean(),
        observation: Joi.string().allow('')
      })),
      emails: Joi.array().items(Joi.object().keys({
        typeOfEmail: Joi.string().valid([types.TypeOfEmail]),
        email: Joi.string().email(),
        active: Joi.boolean()
      })),
      sites: Joi.array().items(Joi.object().keys({
        typeOfSite: Joi.string().valid([types.TypeOfSite]),
        site: Joi.string(),
      })),
    },

    addresses: Joi.array().items(Joi.object().keys({
      typeOfAddress: Joi.string().valid([types.TypeOfAddress]),
      street: Joi.string(),
      city: Joi.string(),
      state: Joi.string().min(2).max(2),
      zipCode: Joi.string(),
      number: Joi.string(),
      complement: Joi.string(),
      district: Joi.string()
    })),

    observation: Joi.string(),

    bankAccount: Joi.array().items(Joi.object().keys({
      bankingAgency: Joi.string(),
      accountNumber: Joi.string(),
      digit: Joi.string(),
      description: Joi.string(),
      openingDate: Joi.date()
    })),

    reference: Joi.array().items(Joi.object().keys({
      reference: Joi.string(),
      name: Joi.string(),
      phone: Joi.string(),
      observation: Joi.string()
    })),

    createdAt: Joi.date(),
    updatedAt: Joi.date(),
  }
};

module.exports = clientSchema;
