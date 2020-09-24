const express = require('express');
const router = express.Router();

/* GET board page. */
router.get('/', function(req, res, next) {
	res.render('question', { title: 'question' });
});

/* POST question contents */
router.post('/question', (req, res, next) => {
	let name = req.body.name;
	let age = req.body.age;
	let content = req.body.content;
	
	res.redirect('/');
})

module.exports = router;
