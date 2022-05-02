const {User, Readme} = require('../models');

const readmeController = {
    // get all Readme
    getAllReadme(req, res) {
        Readme.find({})
          .then(dbUserData => res.json(dbUserData))
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
          });
      },
    
      // get one readme by id
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
  
      // create Readme
      createReadme({ body }, res) {
        Readme.create(body)
          .then(dbUserData => res.json(dbUserData))
          .catch(err => res.status(400).json(err));
      },
  
    
  
      // delete Readme and associated Readme from user 
      removeReadme({ params }, res) {
        Readme.findOneAndDelete({ _id: params.readmeId })
          .then(deletedReadme => {
            if (!deletedReadme) {
              return res.status(404).json({ message: 'No Readme with this id!' });
            }
            return User.findOneAndUpdate(
              {  _id: params.userId },
              { $pull: { readMe: params.readmeId } },
              { new: true }
            );
          })
          .then(dbUserData => {
            if (!dbUserData) {
              res.status(404).json({ message: 'No user found with this id!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.json(err));
      }
  };
  
  module.exports = readmeController;