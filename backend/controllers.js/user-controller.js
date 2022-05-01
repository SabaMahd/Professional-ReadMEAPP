const { User } = require('../models');

const userController = {
  // the functions will go in here as methods
    // get all users
    getAllPizza(req, res) {
      User.find({})
        .then(dbUserData => res.json(dbuserData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },
  
    // get one user by id
    getUserById({ params }, res) {
      User.findOne({ _id: params.id })
        .then(dbUserData => {
          // If no user is found, send 404
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },
  
};

module.exports = userController;