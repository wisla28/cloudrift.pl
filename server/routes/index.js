const express = require('express');
const router = express.Router();
const pages_url = require('../settings');
const { SitemapStream, streamToPromise } = require('sitemap');


router.get('/', async (req, res) => {
  try {
    res.render(pages_url + '/index.ejs');
  }
  catch (error) {
  console.error(error);
  res.status(500).send('Internal Server Error');
  }
});

router.get('/regulamin', async (req, res) => {
  try {
    res.render(pages_url + '/regulamin.ejs');
  }
  catch (error) {
  console.error(error);
  res.status(500).send('Internal Server Error');
  }
});

router.get('/sitemap.xml', async (req, res) => {
  try {
      const sitemap = new SitemapStream({ hostname: 'https://cloudrift.pl' });

      // Dodaj poszczególne strony do mapy witryny
      sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
      sitemap.write({ url: '/services/monitoring', changefreq: 'monthly', priority: 0.8 });
      sitemap.write({ url: '/services/network', changefreq: 'monthly', priority: 0.8 });
      sitemap.write({ url: '/services/cloud', changefreq: 'monthly', priority: 0.8 });
      sitemap.write({ url: '/services/cctv', changefreq: 'monthly', priority: 0.8 });
      sitemap.write({ url: '/services/fiber', changefreq: 'monthly', priority: 0.8 });
      sitemap.write({ url: '/services/outsourcing', changefreq: 'monthly', priority: 0.8 });


      sitemap.end();

      const sitemapXML = await streamToPromise(sitemap);
      res.header('Content-Type', 'application/xml');
      res.send(sitemapXML);
  } catch (err) {
      console.error(err);
      res.status(500).end();
  }
});


module.exports = router;
