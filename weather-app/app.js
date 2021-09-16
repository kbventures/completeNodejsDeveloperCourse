const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=49088faa4578fd65877d97fbf6281e52&query=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (error, response) => {
  const data = response.body.current;
  console.log(data);
});

request({ url: url, json: true }, (error, response) => {
  const data = response.body.current;
  console.log(
    response.body.current.weather_descriptions[0] +
      ' It is currently ' +
      data.temperature +
      ' degrees out. There is ' +
      data.precip +
      ' % chance of rain.'
  );
});
