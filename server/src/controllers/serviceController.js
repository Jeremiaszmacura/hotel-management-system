const { Service } = require('../models/service')


const getAll = (req, res) => {
  Service.find({}, (error, data) => {
    if (error) {
      console.log(error)
      return res.json('something went wrong')
    }
    if (!data) {
      return res.json([{ error: 'No services in database' }])
    }
    return res.json(data)
  })
}


const getOne = (req, res) => {
  Service.findOne({ _id: req.params.id }, (error, data) => {
    if (error) {
      console.log(error)
      return res.json('something went wrong')
    }
    if (!data) {
      return res.json({ error: 'No such service in database' })
    }
    res.json(data)
  })
}


const createService = (req, res) => {
  req.body.user = req.user._id
  const service = new Service(req.body)
  service.save()
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((error) => {
      console.log(error)
      return res.status(500).json('something went wrong')
    })
}


const updateService = async (req, res) => {
  try {
    const data = await Service.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    data ? res.json(data) : res.status(404).send()
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(422).send(err)
    } else {
      res.status(500).send(err)
    }
  }
}


const removeService = (req, res) => {
  Service.findOne({ _id: req.params.id }, (error, data) => {
    if (error) {
      console.log(error)
      return res.json('something went wrong')
    }
    if (!data) {
      return res.json('No such a service in database')
    }
    data.remove()
    return res.json('Service deleted')
  })
}


module.exports = {
  getAll,
  getOne,
  createService,
  updateService,
  removeService
}
