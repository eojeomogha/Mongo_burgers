// create 5 burgers (at least 3 should be beef)
db.burger.insert({
  meat: 'value',
  cheese: true/false,
  toppings: ['whatever']
})

// find all the burgers
db.burger.find()

// show just the meat of each burger
db.burger.find({}, { _id: 0, meat: 1})

// show just the toppings of each burger
db.burger.find({}, { _id: 0, toppings: 1 })


// show everything but the cheese
db.burger.find({}, { _id: 0, cheese: 0 })


// find all the burgers with beef
db.burger.find({ meat: 'beef' })


// find all the burgers that are not beef
db.burger.find({ meat: { $ne: 'beef' } })


// find the first burger with cheese
db.burger.findOne({ cheese: true })


// find one and update the first burger with cheese to have a property of 'double cheese'
db.burger.updateOne(
  { cheese: true },
  { $set: { extraTopping: 'double cheese' } }
)


// find the burger you updated to have double cheese
db.burger.findOne({ extraTopping: 'double cheese' })


// find and update all the beef burgers to be 'veggie'
db.burger.updateMany(
  { meat: 'beef' },
  { $set: { meat: 'veggie' } }
)


// delete one of your veggie burgers
// BEWARE: db.burger.remove({meat: 'veggie'}) DELETES ALL!!!  DO NOT USE!
db.burger.deleteOne({ meat: 'veggie' })


// drop the collection
//Expected Output
//true
db.burger.drop()


// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }
db.dropDatabase()


//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database
use burgers
db.createCollection("burger")
db.burger.insertMany([
  {
    _id: ObjectId("648b4d148b27f70d9ffc9d4b"),
    meat: 'beef',
    cheese: false,
    toppings: [ 'ketchup', 'onions', 'pickles' ]
  },
  {
    _id: ObjectId("648b4df08b27f70d9ffc9d4c"),
    meat: 'beef',
    cheese: false,
    toppings: [ 'ketchup', 'onions', 'pickles' ]
  },
  {
    _id: ObjectId("648b53ed8b27f70d9ffc9d4d"),
    meat: 'beef',
    cheese: false,
    toppings: [ 'ketchup', 'onions', 'tomatoes', 'chiles' ]
  },
  {
    _id: ObjectId("648b54608b27f70d9ffc9d4e"),
    meat: 'monkey',
    cheese: true,
    toppings: [ 'ketchup', 'bacon', 'mustard' ]
  },
  {
    _id: ObjectId("648b54ef8b27f70d9ffc9d4f"),
    meat: 'crocodile',
    cheese: false,
    toppings: [ 'ketchup', 'onions', 'mustard', 'bacon' ]
  }
])


// Change the name of the key cheese to 'pumpkinSpice'
db.burger.updateMany({}, { $rename: { "cheese": "pumpkinSpice" } })


// find all the burgers with ketchup (or another topping you used at least once)
db.burger.find({ toppings: 'ketchup' })


// find all the burgers with pickles (or a topping you used more than once) and remove the pickles
db.burger.updateMany({ toppings: 'pickles' }, { $pull: { toppings: 'pickles' } })


// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact
db.burger.updateMany({ meat: 'beef' }, { $push: { toppings: 'eggs' } })

//Add a price to each burger, start with $5.00 for each burger 
db.burger.updateMany({}, { $set: { price: 5 } })
