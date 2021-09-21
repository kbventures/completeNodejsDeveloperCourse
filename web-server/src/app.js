const path = require('path');
const express = require('express');
const hbs = require('hbs');

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname, '../public'));

const app = express();

// Define Paths For Express Config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup Handlebars Engine And Views Location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup Static Directory to Serve
app.use(express.static(publicDirectoryPath));

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
    helpText: 'This is some helpful text.',
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

// nodemon src/appjs -e js,hbs
