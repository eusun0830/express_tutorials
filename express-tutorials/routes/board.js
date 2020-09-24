const express = require('express');
const router = express.Router();

/* GET board page. */
router.get('/', function(req, res, next) {
  res.render('board', { title: 'board' });
});

module.exports = router;
