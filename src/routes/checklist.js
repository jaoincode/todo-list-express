const express = require('express');

const router = express.Router();

const Checklist = require('../models/checklist');

router.get('/', async (req, res) => {
  try {
    const checklists = await Checklist.find({});
    res.status(200).render('checklists/index', { checklists });
  } catch (err) {
    res.status(422).render('pages/error', { error: 'Erro ao exibir as listas'});
  }
})

router.post('/', async (req, res) => {
  const { name } = req.body.checklist;
  const checklist = new Checklist({name});
  
  try {
    await Checklist.save();
    res.redirect('/checklists');
  } catch (err) {
    res.status(500).render('pages/error', {error: 'Erro ao criar checklist'});
  } 
})

router.get('/:id', async (req, res) => {
  try {
    let checklist = await Checklist.findById(req.params.id);
    res.status(200).render('checklists/show', { checklist })
  } catch (error) {
    res.status(500).render('pages/error', {error: 'Erro ao exibir as Listas de tarefas'});
  }
})

router.get('/new', async (req, res) => {
  try {
    const checklist = new Checklist();
    res.status(200).render('checklists/new', { checklist });
  } catch (err) {
    res.status(500).render('pages/error', { errors: 'Erro ao carregar o formulário'}); 
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { name } = req.body; 
    const checklist = await Checklist.findByIdAndUpdate(req.params.id, {name}, {new: true});
    res.status(200).json(checklist);
  } catch (err) {
    res.status(422).json(err);
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const checklist = await Checklist.findByIdAndRemove(req.params.id);
    res.status(200).json(checklist);
  } catch (err) {
    res.status(422).json(err);
  }
})

module.exports = router;