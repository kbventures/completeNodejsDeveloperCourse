const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=49088faa4578fd65877d97fbf6281e52&query=37.8267,-122.4233';

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
