const express = require('express');
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser');

// Configurando portas
const PORT = 3000;
app.listen(PORT, function(){
  console.log(`O express está sendo executado na porta ${PORT}.`);
})

// usando o body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// db connection
db
 .authenticate()
 .then(()=> {
  console.log("Conectou ao banco com sucesso.")
 })
 .catch(err => {
  console.log("Ocorreu um erro ao conectar", err)
 })


// routes
app.get('/', (req, res)=>{
  res.send('in work now man...')
});

// jobs routes
app.use('/jobs', require('./routes/jobs'));

