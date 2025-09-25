const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3003;

app.get('/readfile', (req, res) => {
    // VULNERABILITY: Path Traversal
    // An attacker can pass '?file=../../../../etc/passwd'
    const filename = req.query.file;
    const filePath = path.join(__dirname, 'uploads', filename); 

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`File read error: ${err}`);
            return res.status(500).send(`Error reading file: ${err.message}`);
        }
        res.send(`<pre>${data}</pre>`);
    });
});

app.listen(port, () => {
    console.log(`Path Traversal Server listening at http://localhost:${port}`);
});