const { json } = require('express');
var express = require('express');
var router = express.Router();

const Post = require('../models/Post');


/* GET astronauts listing. */
router.get('/', async (req, res) => {
  const list = await Post.find();
  res.json(list);
});


/* CREATE a new astronaut */
router.post('/', async (req, res) => {
  const post = new Post({
    name: req.body.name,
    dateNaissance: req.body.dateNaissance,
    mission: req.body.mission,
    dateMission: req.body.dateMission,
    nationalite: req.body.nationalite,
    employeur: req.body.employeur
  });

  const create = await post.save();
  res.json(create);

  res.send(`User with the name ${post.name} and the id: ${post._id} added to the database`);
});


/* RESEARCH a astronaut by id */
router.get('/:id', async (req, res) => {
  const research = await Post.findById(req.params.id);
  res.json(research);

  res.send(`Found user with the name ${post.name}`);
});


/* DELETE a astronaut by id */
router.delete('/:id', async (req, res) => {
  const suppr = await Post.remove({_id: req.params.id});
  res.json(suppr);

  res.send(`Deleted user with the name ${post.name} and the id: ${post._id}`);
});


/* UPDATE a astronaut by id */
router.patch('/:id', async (req, res) => {  
  const update = await Post.updateOne(
    { _id: req.params.id },
    { $set: { 
        name: req.body.name,
        dateNaissance: req.body.dateNaissance,
        mission: req.body.mission,
        dateMission: req.body.dateMission,
        nationalite: req.body.nationalite,
        employeur: req.body.employeur
      } 
    }
  );
  res.json(update);

  res.send(`User with the name: ${post.name} and the id: ${post._id} has been updated`)
});


module.exports = router;
