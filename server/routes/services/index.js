const express = require('express');
const router = express.Router();
const pages_url = require('../../settings');


router.use((req, res, next) => {
  const fullPath = req.baseUrl + req.path; // Pełna ścieżka
  const path = fullPath.split('/').filter(Boolean); // Rozdzielenie ścieżki

  // Obiekt customowych nazw
  const customNames = {
      services: 'Usługi',
      cctv: 'Monitoring CCTV',
      cloud: 'Chmura',
      outsourcing: 'Outsourcing IT',
      network: 'Sieci LAN',
      monitoring: 'Monitoring infrastruktury IT',
      fiber: 'Technologia światłowodowa'
  };

  const breadcrumbs = [];

  if (path.length > 0) {
      breadcrumbs.push({ name: 'Strona główna', url: '/' });
  }

  path.forEach((segment, index) => {
      const url = '/' + path.slice(0, index + 1).join('/');
      // Sprawdzanie, czy istnieje customowa nazwa
      const name = customNames[segment] || segment.charAt(0).toUpperCase() + segment.slice(1); // Wielka litera jako fallback
      if (index === path.length - 1) {
          breadcrumbs.push({ name, url: null }); // Ostatni element
      } else {
          breadcrumbs.push({ name, url });
      }
  });

  res.locals.breadcrumbs = breadcrumbs; // Udostępnienie breadcrumbs w widokach
  next();
});



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
