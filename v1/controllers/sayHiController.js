'use strict';

const sayHiWrapper = ({
  adapters,
  logger,
  services,
  repository,
}) => {
  const sayHi = (request, reply) => adapters.sayHi({
    logger,
    services: {
      hello: services.hello,
    },
    payload: {
      ...request.payload,
      header_id: request.headers.id,
    },
    repository: repository.saiHyRepository,
    onSuccess: data => reply.response(data).code(200),
    onError: err => reply.response(err).code(err.status_code),
  });

  return {
    sayHi,
  };
};

module.exports = sayHiWrapper;
