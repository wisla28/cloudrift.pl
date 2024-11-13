const express = require('express');
const router = express.Router();
const pages_url = require('../../settings');


router.get('/cloud', async (req, res) => {
    try {
      res.render(pages_url + '/services/cloud.ejs');
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

router.get('/fiber', async (req, res) => {
  try {
    res.render(pages_url + '/services/fiber.ejs');
  }
  catch (error) {
  console.error(error);
  res.status(500).send('Internal Server Error');
  }
});

router.get('/cctv', async (req, res) => {
  try {
    res.render(pages_url + '/services/cctv.ejs');
  }
  catch (error) {
  console.error(error);
  res.status(500).send('Internal Server Error');
  }
});

router.get('/outsourcing', async (req, res) => {
  try {
    res.render(pages_url + '/services/outsourcing.ejs');
  }
  catch (error) {
  console.error(error);
  res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
