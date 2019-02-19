const express = require('express')

const Post = require('../data/db')

const router = express.Router()

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const post = await Post.findById(id)
        console.log(post)
        if (post.length > 0) {
            return res.status(200).json(post)
        } else {
            res.status(404).json({ message: "The post with this ID was not found"})
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: "The post information could not be received" })
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const count = await Post.remove(id)
        console.log(count)
        if (count > 0) {
            res.status(200).json(count)
        } else {
            res.status(404).json({ message: "The post with this ID could not be found" })
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: "The Post Could Not Be Removed" })
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id
    const {title, contents} = req.body
    if (!title || !contents) {
        return res.send({status: 400, message: "Please provide both title and contents in your update"})
    }
    try {
        const post = await Post.update(id, {title, contents})
        if (post) {
            res.status(200).json(post)
        } else {
            res.status(404).json({ message: "The ost with the specified ID does not exist" })
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({ message: "The post could not be updated" })
    }
})

module.exports = router