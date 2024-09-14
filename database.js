 
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./meal_database.db');

function initDatabase() {
  db.run(`CREATE TABLE IF NOT EXISTS recipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL
  )`);
}

module.exports = { db, initDatabase };
