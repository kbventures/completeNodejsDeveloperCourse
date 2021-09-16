const request = require('request');

// const url =
//   'http://api.weatherstack.com/current?access_key=49088faa4578fd65877d97fbf6281e52&query=37.8267,-122.4233&units=f';

// request({ url: url, json: true }, (error, response) => {
//   const data = response.body.current;
//   console.log(data);
// });

// request({ url: url, json: true }, (error, response) => {
//   const data = response.body.current;
//   console.log(
//     response.body.current.weather_descriptions[0] +
//       ' It is currently ' +
//       data.temperature +
//       ' degrees out. There is ' +
//       data.precip +
//       ' % chance of rain.'
//   );
// });

const url =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia21ieCIsImEiOiJja3Rtem1zMGYwbWY5MndvNWthZGowbnF2In0.OdEFv8W8jnX-99cYzsqfDg&limit=1';

request({ url: url, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1];
  const Longitude = response.body.features[0].center[0];
  console.log('Latitude: ' + latitude + ' Longitude: ' + Longitude);
});
