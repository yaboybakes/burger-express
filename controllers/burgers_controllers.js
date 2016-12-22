var burger = require('../models/burger.js');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});

router.post('/burgers/create', function(req, res) {
    burger.insertOne(['burger_name'], [req.body.name], function() {
        res.redirect('/burgers');
    });
});

router.put('/burgers/update/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function() {
        res.redirect('/burgers');
    });
});

router.delete('/burgers/delete/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
    burger.deleteOne(condition, function() {
        res.redirect('/burgers');
    });
});

module.exports = router;
