const express = require('express');

const app = express();

app.get('', (req, res) => {
  res.send('<H1>Weather</H1>');
});

app.get('/help', (req, res) => {
  res.send([
    {
      name: 'Andrew',
      age: 27,
    },
    {
      name: 'Sarah',
      age: 16,
    },
  ]);
});

app.get('/about', (req, res) => {
  res.send('<H1>About</H1>');
});

app.get('/weather', (req, res) => {
  res.send([
    {
      location: 'Boston',
      forecast: 'Cloudy',
    },
    {
      location: 'New York',
      forecast: 'Sunny',
    },
  ]);
});

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
