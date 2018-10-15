var models = require('../models'); //モデルの読み込み

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  models.User.findAll({
    order: [
      ['id', 'desc']
    ],
    limit: 10
  }).then( (users) => {
    res.render('users', {
      title: 'Node.js/Express入門: CRUD サンプル',
      users: users
    });
  }); 
});

router.post('/create', (req, res) => {
  models.User.create({
    first_name: req.body.first,
    last_name: req.body.last_name,
    email: req.body.email
  }).then( () => {
    res.reject('/users');
  });
});

module.exports = router;
