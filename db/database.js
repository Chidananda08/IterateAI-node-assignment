const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run("CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)");

  // Sample data
  db.run("INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com')");
  db.run("INSERT INTO users (name, email) VALUES ('Jane Doe', 'jane@example.com')");
});

module.exports = db;
