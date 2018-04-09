export default class LocalWeather {
  constructor(data) {
    if (!data) {
      throw new Error('Not possible to instantiate with empty value');
    }

    this.city = data.location.name;
    this.degreesInC = data.current.temp_c;
    this.degreesInF = data.current.temp_f;
    this.description = data.current.condition.text;
    this.icon = data.current.condition.icon;
    this.code = data.current.condition.code;
  }
}
