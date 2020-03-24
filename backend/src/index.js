const express = require('express');

const app = express();

app.get('/users', (req, res) => {
  const params = req.query;

  console.log(params);
  
  return res.json({
    aluno: 'Junior'
  });
})

app.listen(3333);