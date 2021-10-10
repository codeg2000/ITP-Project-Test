const router = require('express').Router();
let Sale = require('../models/sale.model');

router.route('/').get((req, res) => {
  Sale.find()
    .then(sales => res.json(sales))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const newSale = new Sale(req.body);

  newSale.save()
  .then(() => res.json('Sale added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Sale.findById(req.params.id)
    .then(sale => res.json(sale))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Sale.findByIdAndDelete(req.params.id)
    .then(() => res.json('sale deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Sale.findById(req.params.id)
    .then(sale => {
      sale.itemname = req.body.itemname;
      sale.description = req.body.description;
      sale.quantity = Number(req.body.quantity);
      sale.price = Number(req.body.price);
      sale.date = Date.parse(req.body.date);

      sale.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;