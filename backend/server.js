const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const connection = require("./database/database");
const Question = require("./database/Question");
const Answer = require("./database/Answer");

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
  Question.findAll({ raw: true, order: [['id', 'DESC']] }).then(questions => {
    res.send(questions);
  });
});

app.get("/question/:id", (req, res) => {
  let id = req.params.id;
  Question.findOne({
    where: { id: id }
  }).then(question => {
    question ? res.send(question) : res.send("Pergunta não encontrada");
  })
});

app.post('/to-ask', (req, res) => {
  const title = req.body.titulo;
  const description = req.body.descricao;
  Question.create({
    title,
    description
  }).then(() => {
    res.send(`Form recebido! Título: ${title}, Descrição: ${description}`);
    // res.redirect("http://localhost:3000")
  })
});

app.listen(port, () => console.log(`Listening on port ${port}`));