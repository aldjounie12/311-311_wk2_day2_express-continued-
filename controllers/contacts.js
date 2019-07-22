const contacts = require('../data/contacts')
const list = (req, res) => {
  res.json(contacts)
}

const show = (req, res) => {
  const contact = contacts.find(function(item) {
    return item._id == req.params.id
  })
  res.json(contact)
}

const create = (req, res) => {
  const newContact = {
    _id: contacts.length +1,
    body: req.body.body
  }
  contacts.push(newContact)
}

module.exports = {
  list, show, create
}