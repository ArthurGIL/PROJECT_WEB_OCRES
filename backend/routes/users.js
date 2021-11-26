var express = require('express');
var router = express.Router();

const { v4: uuidv4 } = require('uuid');

//database
let users = [];

/* GET users listing. */
router.get('/', function(req, res, next) {  
  res.send(users);
});

/* CREATE a new user with id */
router.post('/', function(req, res, next) {
  const user = req.body;
  //Spread des properties d'un user (name, age...) + ajout de l'id unique
  const userId = { ...user, id: uuidv4() }
  users.push(userId);

  res.send(`User with the name ${user.firstName} added to the database`);
});

/* RESEARCH a user by id */
router.get('/:id', function(req, res, next) {
  //Récupération de l'id de chaque user avec req.params
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
});

/* DELETE a user by id */
router.delete('/:id', function(req, res, next) {
  //Suppression d'un user en fonction de son id
  const { id } = req.params;
  //On sélectionne le user a supprimer en fonction du user connecté
  users = users.filter((user) => user.id !== id); //On filtre les users qui n'ont pas le même id

  res.send(`User with id : ${id} deleted`);
});

/* UPDATE a user by id */
router.patch('/:id', function(req, res, next) {  
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  //Trouve l'id du user correspondant
  const user = users.find((user) => user.id === id);

  if(firstName) { user.firstName = firstName; }
  if(lastName) { user.lastName = lastName; }
  if(age) { user.age = age; }

  res.send(`User with the id : ${id} has been updated`)
});

module.exports = router;
