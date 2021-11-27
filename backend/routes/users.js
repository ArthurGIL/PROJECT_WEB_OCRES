const { json } = require('express');
var express = require('express');
var router = express.Router();

const Post = require('../models/Post');


/* GET users listing. */
router.get('/', async (req, res) => {
  const list = await Post.find();
  res.json(list);
});


/* CREATE a new user */
router.post('/', async (req, res) => {
  const post = new Post({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
  });

  const create = await post.save();
  res.json(create);

  res.send(`User with the name ${post.firstName} and the id: ${post._id} added to the database`);
});


/* RESEARCH a user by id */
router.get('/:id', async (req, res) => {
  const research = await Post.findById(req.params.id);
  res.json(research);

  res.send(`Found user with the name ${post.firstName}`);
});


/* DELETE a user by id */
router.delete('/:id', async (req, res) => {
  const suppr = await Post.remove({_id: req.params.id});
  res.json(suppr);

  res.send(`Deleted user with the name ${post.firstName} and the id: ${post._id}`);
});


/* UPDATE a user by id */
router.patch('/:id', async (req, res) => {  
  const update = await Post.updateOne(
    { _id: req.params.id },
    { $set: { 
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age
    } }
  );
  res.json(update);

  res.send(`User with the name: ${post.firstName} and the id: ${post._id} has been updated`)
});


module.exports = router;
