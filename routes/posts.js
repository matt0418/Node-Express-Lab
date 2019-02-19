const express = require('express')

const Posts = require('../data/db')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find(req.query)
        res.status(200).json(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "The posts information could not be retrieved"
        })
    }
})

router.post('/', async (req, res) => {
    const {title, contents} = req.body
    if (!title || !contents) {
        return (
            res.send({ status: 400, errorMessage: "Please provide title and contents"})
        )
    } else {
        try {
            const post = await Posts.insert(req.body)
            res.status(201).json(post)
        } catch (error) {
            console.log(error)
            res.status(500).json({
                error: "There was an error while saving the post"
            })
        }
    }

})

module.exports = router