const path = require('path');
const express = require('express');

// console.log(__dirname);
// console.log(__filename);
console.log(path.join(__dirname, '../public'));

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
// app.use(express.static(publicDirectoryPath));
// app.set('views', '../views');

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Andrew Mead',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Andrew Mead',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'Andrew Mead',
  });
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

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
