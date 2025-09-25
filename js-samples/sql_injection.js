const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3001;
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run("CREATE TABLE users (id INT, username TEXT, password TEXT)");
    db.run("INSERT INTO users VALUES (1, 'admin', 'password123')");
});

app.get('/login', (req, res) => {
    // VULNERABILITY: SQL Injection
    // An attacker can pass 'username=admin&password=x' OR 1=1 -- '
    const { username, password } = req.query;
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

    db.get(query, (err, row) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send('Database error');
        }
        if (row) {
            res.send(`Logged in as: ${row.username}`);
        } else {
            res.send('Invalid credentials');
        }
    });
});

app.listen(port, () => {
    console.log(`SQLi Server listening at http://localhost:${port}`);
});