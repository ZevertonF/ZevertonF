const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'senha',
  database: 'minha_base_de_dados'
});

app.post('/culturas', (req, res) => {
  const { nome, area_plantada, data_plantio } = req.body;
  const query = `INSERT INTO culturas (nome, area_plantada, data_plantio) VALUES ('${nome}', ${area_plantada}, '${data_plantio}')`;

  connection.query(query, (error, results) => {
    if (error) throw error;

    res.send({ message: 'Cultura adicionada com sucesso!' });
  });
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
