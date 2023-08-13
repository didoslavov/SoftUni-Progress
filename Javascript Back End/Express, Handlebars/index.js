const express = require('express');

const app = express();
app.listen(3000);

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
