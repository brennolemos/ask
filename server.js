const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/savequest', (req, res) => {
  const title = req.body.titulo;
  const description = req.body.descricao;
  res.send(`Form recebido! Título: ${title}, Descrição: ${description}`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));