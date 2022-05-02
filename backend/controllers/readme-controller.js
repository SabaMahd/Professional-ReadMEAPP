const {User, Readme} = require('../models');

const readmeController = {
    // get all users
    getAllReadme(req, res) {
        Readme.find({})
          .then(dbUserData => res.json(dbUserData))
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
          });
      },
    
      // get one user by id
      getReadmeById({ params }, res) {
        Readme.findOne({ _id: params.id })
          .then(dbUserData => {
            // If no user is found, send 404
            if (!dbUserData) {
              res.status(404).json({ message: 'No readme found with this id!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
          });
      },
  
      // create users
      createReadme({ body }, res) {
        Readme.create(body)
          .then(dbUserData => res.json(dbUserData))
          .catch(err => res.status(400).json(err));
      },
  
      // update user by id
      updateReadme({ params, body }, res) {
        Readme.findOneAndUpdate({ _id: params.id }, body, { new: true })
          .then(dbUserData => {
            if (!dbUserData) {
              res.status(404).json({ message: 'No readme found with this id!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.status(400).json(err));
      },
  
      // delete user
    deletereadme({ params }, res) {
      Readme.findOneAndDelete({ _id: params.id })
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No readme found with this id!' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    }
  };
  
  module.exports = readmeController;