require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const { db, initDatabase } = require('./database');

const app = express();
const port = process.env.PORT || 3000;

initDatabase();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/recipes', async (req, res) => {
  try {
    const { ingredients } = req.query;
    const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
      params: {
        key: process.env.API_KEY,
        cx: process.env.SEARCH_ENGINE_ID,
        q: `recipe ${ingredients}`,
        searchType: 'image'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while searching for recipes' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
