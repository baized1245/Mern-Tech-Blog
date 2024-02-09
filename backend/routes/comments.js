const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Post = require('../models/Post')
const bcrypt = require('bcrypt')
const Comment = require('../models/Comment')

// CREATE
router.post('/create', async (req, res) => {
  try {
    const newComment = new Comment(req.body)
    const savedComment = await newComment.save()
    res.status(200).json(savedComment)
  } catch (err) {
    res.status(200).json(err)
  }
})

// Update
router.put('/:id', async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
    res.status(200).json(updatedComment)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

// Delete
router.delete('/:id', async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id)

    res.status(200).json('Comment has been deleted')
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

// Get Posts comments
router.get('/post/:postId', async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId })
    res.status(200).json(comments)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

module.exports = router
