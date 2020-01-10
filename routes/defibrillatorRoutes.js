const mongoose = require('mongoose');
const Defibrillator = mongoose.model('defibrillators');

module.exports = (app) => {

  app.get(`/api/defibrillator`, async (req, res) => {
    let defibrillators = await Defibrillator.find();
    return res.status(200).send(defibrillators);
  });

  app.post(`/api/defibrillator`, async (req, res) => {
    let defibrillator = await Defibrillator.create(req.body);
    return res.status(201).send({
      error: false,
      defibrillator
    })
  })

  app.put(`/api/defibrillator/:id`, async (req, res) => {
    const {id} = req.params;

    let defibrillator = await Defibrillator.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      defibrillator
    })

  });

  app.delete(`/api/defibrillator/:id`, async (req, res) => {
    const {id} = req.params;

    let defibrillator = await Defibrillator.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      defibrillator
    })

  })

}