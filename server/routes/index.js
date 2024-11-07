const express = require('express');
const router = express.Router();
const pages_url = require('../settings');

router.get('/', async (req, res) => {
  try {
    res.render(pages_url + '/index.ejs');
  }
  catch (error) {
  console.error(error);
  res.status(500).send('Internal Server Error');
  }
});

router.get('/', async (req, res) => {
  try {
    res.render(pages_url + '/index.ejs');
  }
  catch (error) {
  console.error(error);
  res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
