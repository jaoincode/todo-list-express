const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('passei na rota checklists')
  res.send();
})

module.exports = router;