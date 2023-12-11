// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const fs = require('fs');

// Import data
const data = require('../data/comments.json');
const comments = data.comments;

// Routes
router.get('/', (req, res) => {
  res.json(comments);
});

router.get('/:id', (req, res) => {
  const comment = comments.find((comment) => comment.id === req.params.id);
  res.json(comment);
});

router.post('/', (req, res) => {
  // Create new comment
  const comment = {
    id: Date.now().toString(),
