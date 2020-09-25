var express = require('express');
var router = express.Router();

/* GET login page */
router.get('/', (req, res, next) => {
	if(req.body.logined) {
		res.render('index', { title: 'Express tutorials' });
	} else {
		res.render('login', { title: 'login' });
	}
});

/* POST login return */
router.post('/login', (req, res, next) => {
	let id = req.body.user_id;
	let pw = req.body.user_pw;
	
	// No DB connect
	if(id == "hello" && pw == "world") {
		req.session.regenerate( () => {
			req.session.logined = true;
			res.redirect('/index');
		});
	} else {
		res.redirect('/');
	}
});

/* GET home page. */
router.get('/index', (req, res, next) => {
	if(req.body.logined){
		res.render('index', { title: 'Express tutorials' });
	} else {
		res.redirect('/');
	}
});

/* GET board page */
router.get('/board', (req, res, next) => {
	if(req.body.logined){
		res.render('board', { title: 'board' });
	} else {
		res.redirect('/');
	}
})

/* GET question page. */
router.get('/question', (req, res, next) => {
	if(req.body.logined){
		res.render('question', { title: 'question' });
	} else {
		res.redirect('/');
	}
});

/* POST question contents */
router.post('/question', (req, res, next) => {
	let name = req.body.name;
	let age = req.body.age;
	let content = req.body.content;
	
	res.redirect('/');
})

module.exports = router;
