const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}...`));

app.get('/', (req, res) => {
    res.send('Hello, darkness my old friend.');
});

app.get('/country', (req, res) => {
    res.send({id: 1, name: 'Brazil'}).json();
});