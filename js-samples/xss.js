const express = require('express');
const app = express();
const port = 3002;

app.get('/search', (req, res) => {
    // VULNERABILITY: Reflected XSS
    // An attacker can pass '?query=<script>alert(document.domain)</script>'
    const searchQuery = req.query.query || 'No query';
    res.send(`
        <html>
            <head><title>Search</title></head>
            <body>
                <h1>Search Results for: ${searchQuery}</h1>
                <p>Did you mean: ${searchQuery}?</p>
            </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`XSS Server listening at http://localhost:${port}`);
});