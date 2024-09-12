const express = require('express');
const router = express.Router();
const pages_url = require('../settings');
const Category = require('../model/categories');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.find({ main: true }).exec();
    res.render(pages_url + '/index.ejs', {
      categories,
      page: 'login'
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


module.exports = router;
