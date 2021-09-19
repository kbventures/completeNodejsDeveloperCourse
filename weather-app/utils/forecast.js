const request = require('request');

forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=49088faa4578fd65877d97fbf6281e52&query=' +
    latitude +
    ',' +
    longitude;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Connection problem!', undefined);
    } else if (response.body.error === 0) {
      callback('Coordinate error!', undefined);
    } else {
      callback(
        undefined,
        response.body.current.weather_descriptions[0] +
          '. It is currently ' +
          response.body.current.temperature +
          ' degrees out. There is ' +
          response.body.current.precip +
          ' % chance of rain.'
      );
    }
  });
};

module.exports = forecast;
