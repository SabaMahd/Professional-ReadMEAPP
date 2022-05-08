const { User, ReadMe } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
const fs = require('fs');
const { technologies, installation, usage } = require('../utils/helpers');

// define resolvers
const resolvers = {
  Query: {
    // me query
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate({ path: 'files', options: { sort: { createdAt: -1 } } });

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },

    // other queries remain the same
    // get all users
    users: async () => {
      return User.find({}).select('-__v -password').populate('files');
    },

    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('files');
    },

    allReadmes: async () => {
      return ReadMe.find({});
    },

    // update readmes to get readme of a particular user
    userReadmes: async (parent, { username }) => {
      const params = username ? { username } : {};
      return ReadMe.find(params).sort({ createdAt: -1 });
    },

    composeReadMe: async (parent, { readMeId }, context) => {
      if (context.user) {
        const readMeData = await ReadMe.findById({ _id: readMeId });

        if (readMeData) {
          let content = `# ${readMeData.title} \n\n## Description \n${
            readMeData.description
          }${technologies(readMeData)}${installation(readMeData)}${usage(
            readMeData
          )}`;
          fs.writeFile(`dist/README.md`, content, (err) => {
            if (err) {
              throw err;
            } else {
              console.log('The "data to append" was appended to file!');
            }
          });
          return readMeData;
        } else {
          console.log('No ReadMe found!');
        }
      }
    },
  },

  Mutation: {
    // add a user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { user, token };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addReadMe: async (parent, { input }, context) => {
      if (context.user) {
        const readMe = await ReadMe.create({
          ...input,
          username: context.user.username,
        });
        const updateUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { files: readMe._id } },
          { new: true, runValidators: true }
        )
          .populate('files')
          .select('-__v -password');

        return updateUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    deleteReadMe: async (parent, { readMeId }, context) => {
      if (context.user) {
        const updateUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { files: readMeId } },
          { new: true, runValidators: true }
        )
          .populate('files')
          .select('-__v -password');

        const deleteReadMe = await ReadMe.findOneAndDelete({ _id: readMeId });

        return updateUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
