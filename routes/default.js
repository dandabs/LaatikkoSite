let router = require('express').Router();
let storage = require('../data/simpleStorage');

router.get('/', function(request,response) {

    response.render('root', {pageTitle: "Root"});

  });

module.exports = router;