const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

const fs = require('fs');

// Para el post
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server side!' });
});

app.get("/api/cases", (req, res) => {
    fs.readFile(__dirname + "/" + "cases.json", "utf-8", (err, data) => {
        console.log(data);
        res.end(data);
    });
});

// Para el post
app.post("/api/case", (req, res) => {
    console.log("El cuerpo de la petición es: ", req.body);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
