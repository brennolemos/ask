const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const connection = require("./database/database");
const questionModel = require("./database/Question");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

connection.authenticate()
  .then(() => {
    console.log("Banco conectou")
  })
  .catch((err) => {
    console.log(err)
  })

app.get('/', (req, res) => {
  res.send({ message: "Hello World" })
});

app.post('/savequest', (req, res) => {
  const title = req.body.titulo;
  const description = req.body.descricao;
  res.send(`Form recebido! Título: ${title}, Descrição: ${description}`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));