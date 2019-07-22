const vehicles = require('../data/vehicles')
const list = (req, res) => {
  res.json(vehicles)
}

const show = (req, res) => {
  const vehicle = comments.find(function(item) {
    return item._id == req.params.id
  })
  res.json(vehicle)
}

const create = (req, res) => {
  const newVehicle = {
    _id: vehicles.length +1,
    body: req.body.body
  }
  vehicles.push(newVehicle)
}

module.exports = {
  list, show, create
}