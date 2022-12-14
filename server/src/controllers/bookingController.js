const { User } = require('../models/user')
const { RoomsCalendar } = require('../models/roomsCalendar')
const { RoomsCategory } = require('../models/roomsCategory')
const oneDay = 60 * 60 * 24 * 1000


const getAll = (req, res) => {
    return res.json("TODO")
}


module.exports = {
  getAll,
}
