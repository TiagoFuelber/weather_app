import { expect } from 'chai';
import LocalWeather from '../src/LocalWeather';

const data = {
  location: {
    name: 'Novo Hamburg',
    region: 'Rio Grande do Sul',
    country: 'Brazil',
    lat: -29.7,
    lon: -51.13,
    tz_id: 'America/Sao_Paulo',
    localtime_epoch: 1523299297,
    localtime: '2018-04-09 15:41'
  },
  current: {
    last_updated_epoch: 1523298639,
    last_updated: '2018-04-09 15:30',
    temp_c: 30,
    temp_f: 86,
    is_day: 1,
    condition: {
      text: 'Sunny',
      icon: '//cdn.apixu.com/weather/64x64/day/113.png',
      code: 1000
    },
    wind_mph: 3.8,
    wind_kph: 6.1,
    wind_degree: 150,
    wind_dir: 'SSE',
    pressure_mb: 1015,
    pressure_in: 30.4,
    precip_mm: 0,
    precip_in: 0,
    humidity: 52,
    cloud: 0,
    feelslike_c: 31.8,
    feelslike_f: 89.2,
    vis_km: 10,
    vis_miles: 6
  }
};

describe('LocalWeather', () => {
  context('smoke tests', () => {
    it('should be instantiable', () => {
      const localWeather = new LocalWeather(data);

      expect(localWeather).to.be.an.object;
    });

    it('should should return error if instatiated with empty', () => {
      expect(() => {
        new LocalWeather();
      }).to.throw('Not possible to instantiate with empty value');
    });
  });

  context('properties', () => {
    const localWeather = new LocalWeather(data);

    it('should have the city property', () => {
      expect(localWeather.city).to.be.equal('Novo Hamburg');
    });

    it('should have the degreesInC property', () => {
      expect(localWeather.degreesInC).to.be.equal(30);
    });

    it('should have the degreesInF property', () => {
      expect(localWeather.degreesInF).to.be.equal(86);
    });

    it('should have the description property', () => {
      expect(localWeather.description).to.be.equal('Sunny');
    });

    it('should have the icon property', () => {
      expect(localWeather.icon).to.be.equal('//cdn.apixu.com/weather/64x64/day/113.png');
    });

    it('should have the code property', () => {
      expect(localWeather.code).to.be.equal(1000);
    });
  });
});
