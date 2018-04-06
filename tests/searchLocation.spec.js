import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import chai, { expect } from 'chai';
import searchLocation from '../lib/searchLocation';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

describe('searchLocation', () => {
  let fetchedStub;
  let promise;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  context('smoke tests', () => {
    it('should exist the searchLocation method', () => {
      expect(searchLocation).to.exist;
    });
  });

  context('function requirements', () => {
    it('should call fetch function', () => {
      const data = searchLocation();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch function with the correct URL', () => {
      const data = searchLocation('-29.688047899999997,-51.1333376');
      expect(fetchedStub).to.have.been.calledWith('https://api.apixu.com/v1/current.json?key=d0f7e0df0b704466a40162720160911&q=-29.688047899999997,-51.1333376');
    });
  });
});
