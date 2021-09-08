const express = require('express');
const { body, validationResult } = require("express-validator");

const app = express();

app.use(express.json());

// GET/ http://localhost:8080/boleto/xxxx
// Informações do boleto

const boletos = [];

app.get('/boletos', (request, response) => {
  const {code} = request.query();

  const boleto = {
    "barCode": "212997587",  
    "amount": 1500,
    "expirationDate": "2018-07-16",
  };

  const boletoIndex = boletos.findIndex(boleto => boleto.id === id);
  
  // sem validação
  if (boletoIndex < 0) {
    return res.status(400).json({ error: 'Boleto não encontrado'});
  }

  const results = code
    ? boletos.filter(boleto => boleto.code.includes())
    : boletos;

  return response.status(200).json(boletos);  

  // com validator
  //const errors = validationResult(req);
  //if(!errors.isEmpty()) {
  //  return res.status(400).json({errors: errors.array()});
  //}
  //res.json({msg: "sucesso"});

});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(8080, () => {
  console.log('BackEnd started');
});
 