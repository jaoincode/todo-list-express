const express = require('express');

const router = express.Router();

const Checklist = require('../models/checklist');

router.get('/', async (req, res) => {
  try {
    const checklists = await Checklist.find({}); // => busca as coisas do mongo
    res.status(200).json(checklists);
  } catch (err) {
    res.status(422).json(err);
  }
})

router.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    // criando uma checklist com o nome passado no body
    const checklists = await Checklist.create({name});
    res.status(200).json(checklists);
  } catch (err) {
    res.status(422).json(err);
  } 
})

// recebendo parametros
router.get('/:id', async (req, res) => {
  try {
    const checklist = await Checklist.findById(req.params.id);
    res.status(200).json(checklist);
  } catch (err) {
    res.status(422).json(err);
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