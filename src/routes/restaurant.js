const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurants');

// router.get('/restaurants', async (req, res) => {
//     const restaurants = await Restaurant.find();
//     res.send(restaurants);
// });

router.get('/restaurants', (req, res) => {
    const sort = {};
    if (req.query.sortBy) {
      sort.restaurant_id = req.query.sortBy === 'ASC' ? 1 : -1;
    }
    
    const columns = ['id', 'cuisines', 'name', 'city', 'restaurant_id'];
    const filteredColumns = columns.reduce((obj, col) => {
      obj[col] = 1;
      return obj;
    }, {});
  
    Restaurant.find({}, filteredColumns, { sort }, (err, restaurants) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(restaurants);
      }
    });
  });


// router.get('/restaurants/:cuisine', function(req, res) {
//     const cuisine = req.params.cuisine;
//     Restaurant.find({cuisine: cuisine}, function(err, restaurants) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(restaurants);
//         }
//     });
//   });

  router.get('/restaurants/:cuisine', async (req, res) => {
    const query = {
      cuisine: req.params.cuisine,
      city: { $ne: 'Brooklyn' }
    };
    
    const restaurants = await Restaurant.find(query).select('-_id, -restaurant_id');

    
    try{
        res.send(restaurants);
    }catch(err){
        restaurants.status(500).send(err);
    }
  });
  

module.exports = router;