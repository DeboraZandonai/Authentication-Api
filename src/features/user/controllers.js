const Boom = require("boom");
const Validator = require("fastest-validator");

const services = require("./services");

const v = new Validator();

module.exports = {
  create: async (ctx) => {
    const {
      request: { body },
      response,
    } = ctx;
    const schema = {
      firstName: { max: 60, min: 1, type: "string" },
      email: { max: 255, min: 5, type: "string" },
      data: { max: 8, min: 1, type: "number" },
      cpf: { max: 11, min: 1, type: "number" },
      cep: { max: 8, min: 1, type: "number" },
      endereco: { max: 255, min: 1, type: "string" },
      telefone: { max: 12, min: 1, type: "number" },
      password: { max: 16, min: 8, type: "string" },
    };
    const errors = v.validate(body, schema);

    if (Array.isArray(errors) && errors.length) {
      response.status = 400;
      return (response.body = Boom.badRequest(null, errors));
    }

    const user = await services.create(body);
    response.body = user;
  },
};
