const { json } = require('express');
var express = require('express');
var router = express.Router();

const Post = require('../models/Post');


/* GET astronauts listing. */
const getUsers = async (req, res) => {
  const list = await Post.find();
  res.json(list);
}
router.get('/', getUsers);


/* CREATE a new astronaut */
const createUser = async (req, res) => {
  const post = new Post({
    name: req.body.name,
    dateNaissance: req.body.dateNaissance,
    mission: req.body.mission,
    dateMission: req.body.dateMission,
    nationalite: req.body.nationalite,
    employeur: req.body.employeur,
    image: req.body.image
  });

  const create = await post.save();
  res.json(create);
}
router.post('/', createUser);


/* RESEARCH a astronaut by id */
const researchUser = async (req, res) => {
  const research = await Post.findById(req.params.id);
  res.json(research);
}
router.get('/:id', researchUser);


/* DELETE a astronaut by id */
const deleteUser = async (req, res) => {
  const suppr = await Post.remove({_id: req.params.id});
  res.json(suppr);
}
router.delete('/:id', deleteUser);


/* UPDATE a astronaut by id */
const updateUser = async (req, res) => {  
  const update = await Post.updateOne(
    { _id: req.params.id },
    { $set: { 
        name: req.body.name,
        dateNaissance: req.body.dateNaissance,
        mission: req.body.mission,
        dateMission: req.body.dateMission,
        nationalite: req.body.nationalite,
        employeur: req.body.employeur,
        image: req.body.image
      } 
    }
  );
  res.json(update);
}
router.patch('/:id', updateUser);


module.exports = router;
