const express = require('express');
const Job = require('../models/Job');
const router = express.Router();


// Add job via post
router.post('/add', (req, res)=>{
  let {title, description, salary, company, email, newjob} = req.body;

  // inserir objetos
  Job.create({title, description, salary, company, email, newjob})
     .then(()=> res.redirect('/') )
     .catch(err => console.log(err));
});

module.exports = router;