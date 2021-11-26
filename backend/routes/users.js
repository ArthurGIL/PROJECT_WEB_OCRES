var express = require('express');
var router = express.Router();

/* Pas besoin de mettre /nomdufichier car deja mis dans les routes */

const users = [
  {
    firstName: "Arthur",
    lastName: "Gil",
    age: 21
  },
  {
    firstName: "Callixte",
    lastName: "Fusier",
    age: 21
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(users);
  
  res.send(users);
});

router.post('/', function(req, res, next) {
  console.log('POST RECU')

  //console.log('req.body')

  // users.push()

  res.send('POST RECU');
});

module.exports = router;