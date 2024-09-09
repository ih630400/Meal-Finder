const { db, initDatabase } = require('./database');

// Initialize the database
initDatabase();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Meal Creator App!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
