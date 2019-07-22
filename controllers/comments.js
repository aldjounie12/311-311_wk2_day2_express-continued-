const comments = require('../data/comments')
const list = (req, res) => {
  res.json(comments)
}

const show = (req, res) => {
  const comment = comments.find(function(item) {
    return item._id == req.params.id
  })
  res.json(comment)
}

const create = (req, res) => {
  const newComment = {
    _id: comments.length +1,
    body: req.body.body
  }
  comments.push(newComment)
}

module.exports = {
  list, show, create
}