const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

app.get('/exec', (req, res) => {
    // VULNERABILITY: Command Injection
    // An attacker can pass something like 'name=; rm -rf /'
    const filename = req.query.name; 
    exec(`ls -l ${filename}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).send(`Error: ${stderr}`);
        }
        res.send(`<pre>${stdout}</pre>`);
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});