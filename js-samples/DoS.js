const express = require('express');
const app = express();
const port = 3004;

app.post('/checkuser', express.json(), (req, res) => {
    // VULNERABILITY: ReDoS - Catastrophic backtracking with a vulnerable regex
    // Input like "a" + "a".repeat(1000) + "!" will hang the server.
    const vulnerableRegex = /^(a+)+$/; // Classic ReDoS pattern
    const username = req.body.username;

    if (!username) {
        return res.status(400).send("Username is required.");
    }

    // Simulate validation
    if (vulnerableRegex.test(username)) {
        res.send("Username format valid.");
    } else {
        res.send("Username format invalid.");
    }
});

app.listen(port, () => {
    console.log(`ReDoS Server listening at http://localhost:${port}`);
});