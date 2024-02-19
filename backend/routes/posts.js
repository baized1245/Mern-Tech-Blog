const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Post = require('../models/Post')
const bcrypt = require('bcrypt')
const Comment = require('../models/Comment')
const verifyToken = require('../verifyToken')

// CREATE
router.post('/create', verifyToken, async (req, res) => {
  try {
    const newPost = new Post(req.body)
    const savePost = await newPost.save()
    res.status(200).json(savePost)
  } catch (err) {
    res.status(200).json(err)
  }
})

// Update
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const updatedUser = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
    res.status(200).json(updatedUser)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

// Delete
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id)

    res.status(200).json('Post has been deleted')
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

// Get Post details
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

// Get Posts
router.get('/', async (req, res) => {
  const query = req.query
  console.log(query)
  try {
    const searchFilter = {
      title: { $regex: query.search, $options: 'i' },
    }
    const posts = await Post.find(query.search ? searchFilter : null)
    res.status(200).json(posts)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

// Get User Post
router.get('/user/:userId', async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.params.userid })
    res.status(200).json(posts)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

module.exports = router
