const chai = require('chai');
const sinon = require('sinon');
const assert = chai.assert;

const Logger = require('../app/shared/utils/logger');

describe('Logger', () => {
  const logger = new Logger();

  it('should be a singleton', () => {
    assert.strictEqual(logger, new Logger());
  });

  it('should expose "info", "warn", "error" methods', () => {
    assert.isFunction(logger.info, 'no info method');
    assert.isFunction(logger.warn, 'no warn method');
    assert.isFunction(logger.error, 'no error method');
  });
});
