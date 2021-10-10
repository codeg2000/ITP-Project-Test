const router = require('express').Router();
let Item = require('../models/item.model');

router.route('/').get((req, res) => {
    Item.find()
        .then(items => {
            console.log("asas", items);
            res.json(items)
        }
        )
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;