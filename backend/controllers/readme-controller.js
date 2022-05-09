const {User, Readme} = require('../models');

const readmeController = {
        // add readme to user
        addReadMe({ params, body }, res) {
            console.log(body);
            Readme.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                { _id: params.userId },
                { $push: { readMe: _id } },
                { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
                }
                res.json(dbuserData);
            })
            .catch(err => res.json(err));
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