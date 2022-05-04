const { User, ReadMe } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

// define resolvers
const resolvers = {
  Query: {

    // me query
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')
            .populate('files');
      
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

    // get all ReadMe files
    // update readmes to get readme of a particular user
    readmes: async (parent, {username}) => {
      const params = username ? { username } : {};
      return ReadMe.find(params).sort({ createdAt: -1 });
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
        const readMe = await ReadMe.create({ ...input });
        const updateUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { files: readMe._id } },
          { new: true, runValidators: true }
        ).populate('files');

        return updateUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
