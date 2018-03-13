'use strict';

const _ = require('lodash');
const errorHandler = require('./errorHandler');

const formatResponse = hiOnDB => ({
  saidSomething: hiOnDB.saidSomething,
  lastHiOnDb: hiOnDB.create_date,
});

const insertHiOnDatabase = insert => async (newHiMessage) => {
  await insert(newHiMessage);
  return newHiMessage;
};

const validateServiceResponse = (sayHiServiceResponse) => {
  if (sayHiServiceResponse.fail) {
    return errorHandler.wrapResponseFailure(sayHiServiceResponse);
  }

  if (!sayHiServiceResponse.message) {
    return errorHandler.badServiceResponse();
  }

  return true;
};

const sayHiWrapper = ({
  logger,
  services,
  repository,
  onSuccess,
  onError,
}) => {
  const sayHi = async () => {
    try {
      const { insert } = repository;

      logger.warn(services.hello);
      const saidSomething = await services.hello.sayHi();

      const serviceValidationResponse = validateServiceResponse(saidSomething);
      if (serviceValidationResponse.fail) {
        return onError(serviceValidationResponse);
      }

      const savePayload = {
        create_date: Date.now(),
        saidSomething: _.get(saidSomething, 'message', ''),
      };

      const saved = await insertHiOnDatabase(insert)(savePayload);

      return onSuccess(formatResponse(saved));
    } catch (err) {
      logger.error('Failed', err);
      return onError(errorHandler.genericError(err));
    }
  };

  return { sayHi };
};

module.exports = {
  sayHiWrapper,
};
