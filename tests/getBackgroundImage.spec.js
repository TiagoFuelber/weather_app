import { expect } from 'chai';
import getBackgroundImage from '../src/getBackgroundImage';

describe('getBackgroundImage', () => {
  context('smoke tests', () => {
    it('should exist the getBackgroundImage funtion', () => {
      expect(getBackgroundImage).to.exist;
    });
  });

  context('functionality', () => {
    it('should return the correct image', () => {
      expect(getBackgroundImage(1000)).to.be.equal('clearpic');
    });

    it('should return the correct image', () => {
      expect(getBackgroundImage(1006)).to.be.equal('cloudypic');
    });

    it('should return the correct image', () => {
      expect(getBackgroundImage(1216)).to.be.equal('snowpic');
    });

    it('should return the correct image', () => {
      expect(getBackgroundImage(1087)).to.be.equal('thunderpic');
    });
  });
});
