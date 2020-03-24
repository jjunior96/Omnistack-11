const express = require('express');

const app = express();

app.use(express.json());

app.post('/users', (req, res) => {
  const body = req.body;

  console.log(body);
  
  return res.json({
    aluno: 'Junior'
  });
})

app.listen(3333);