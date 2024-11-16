const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const clientIp = req.headers['x-forwarded-for'] || req.ip;
    console.log("I am here")
    res.send(`Hello from Node.js app in Docker Swarm!: ${clientIp}`);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
