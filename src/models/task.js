const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  name: {type: String, required: true},
  done: {type: Boolean, default: false},
  checklist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Checklist',
    required: true,
  }
});


// exportando o nome do model e o esquema do model
module.exports = mongoose.model('Task', taskSchema);