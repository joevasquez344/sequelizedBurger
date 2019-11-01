const express = require('express');
const router = express.Router();
const db = require('../config/connection')
const BurgerCollection = require('../models/Burger.model')

// render home page
router.get('/', (req, res) => {
  BurgerCollection.findAll({})
  .then((burgers) => {
        res.render('index', {burgers})
    })
    .catch((err) => {
      if(err){
        console.log(err)
      }
    })
   
})

router.get('/burgers', (req, res) => {
  BurgerCollection.findAll({})
  .then((burgers) => {
    res.json(burgers)
  })
  .catch((err) => {
    if(err){
      console.log(err)
    }
  })
  
})

// Add a Burger
router.post('/', (req, res) => {
  console.log("dataaaaaa"+req.body.name)
   
    // Inserting into table
    BurgerCollection.create({
        name: req.body.name
    })
    .then((burger) => {
       res.redirect('/')
    })
    .catch(err => console.log(err))

 
  
})

// router.get('/deleteAll', (req, res) => {
//     BurgerCollection.destroy({
//         where: {},
//         truncate: true
//       })
//       .then(() => {
//           res.redirect('/')
//       })
// })

// router.put('/', (req, res) => {
//     console.log(req.body)

//     BurgerCollection.update(
//         {
//          devoured: true
//         },
//         {
//          where: {
//            id: req.body.id
//          }
//         }).then(function() {
//           return res.redirect("/");
//         });
// })

module.exports = router;