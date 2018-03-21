'use strict';

const sayHiWrapper = (adapters) => {
  const sayHi = (request, reply) => adapters.sayHi({
    payload: {
      ...request.payload,
    },
    onSuccess: data => reply.response(data).code(200),
    onError: err => reply.response(err).code(err.status_code),
  });

  return {
    sayHi,
  };
};

module.exports = sayHiWrapper;
