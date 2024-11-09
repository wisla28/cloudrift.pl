const express = require('express');
const router = express.Router();
const pages_url = require('../../settings');


// Endpoint do obsługi formularza
router.get('/vm', async (req, res) => {
    try {
      res.render(pages_url + '/services/vm.ejs');
    }
    catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
    }
  });

router.get('/containers', async (req, res) => {
  try {
    res.render(pages_url + '/services/containers.ejs');
  }
  catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/monitoring', async (req, res) => {
  try {
    res.render(pages_url + '/services/monitoring.ejs');
  }
  catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/network', async (req, res) => {
  try {
    res.render(pages_url + '/services/network.ejs');
  }
  catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
