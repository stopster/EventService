const chai = require('chai');
const chaiPromised = require('chai-as-promised');
const sinon = require('sinon');
const assert = chai.assert;

const IPLocationService = require('../app/shared/utils/IPLocationService');

describe('IPLocationService', () => {
  const service = new IPLocationService();

  it('should be a singleton', () => {
    assert.strictEqual(service, new IPLocationService(), 'not a singleton');
  });

  it('should expose "getCountryCode" method', () => {
    assert.isFunction(service.getCountryCode, 'not a method');
  });

  it('should expose "getCountryName" method', () => {
    assert.isFunction(service.getCountryName, 'not a method');
  });

    const googleDNS = '8.8.8.8';
  })
});
