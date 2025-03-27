const express = require('express');
const router = express.Router();
const Obituary = require('../models/obituary.model');
const slugify = require('slugify');

// Render Form
router.get('/submit', (req, res) => {
  res.render('form');
});

// Handle Form Submission
router.post('/submit', async (req, res) => {
  try {
    const { name, date_of_birth, date_of_death, content, author } = req.body;
    const slug = slugify(name, { lower: true });

    await Obituary.create({ name, date_of_birth, date_of_death, content, author, slug });

    res.redirect('/');
  } catch (error) {
    res.status(500).send("Error submitting obituary");
  }
});

// View All Obituaries
router.get('/', async (req, res) => {
  const obituaries = await Obituary.findAll();
  res.render('index', { obituaries });
});

// View Single Obituary
router.get('/obituary/:slug', async (req, res) => {
  const obituary = await Obituary.findOne({ where: { slug: req.params.slug } });
  if (!obituary) return res.status(404).send("Obituary not found");

  res.render('obituary', { obituary });
});

module.exports = router;
