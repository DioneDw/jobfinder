const express = require('express')
const Job = require('../models/Job')
const router = express.Router()

// Rota que pega o formulário, renderiza o add.handlebars.
router.get('/add', (req, res) => {
  res.render('add')
})

// Add job via post
router.post('/add', (req, res) => {
  let { title, description, salary, company, email, newjob } = req.body

  // inserir objetos
  Job.create({ title, description, salary, company, email, newjob })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

// Informações da vaga
router.get('/view/:id', (req, res) =>
  Job.findOne({
    where: { id: req.params.id }
  })
    .then(job => {
      res.render('view', { job })
    })
    .catch(erro => {
      console.log(erro)
    })
)

module.exports = router
