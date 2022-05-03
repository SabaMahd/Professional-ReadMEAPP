const { User, ReadMe } = require('../models');
const { signToken } = require('../utils/auth');

// define resolvers
const resolvers = {
  Query: {
    // get all users
    users: async () => {
      return User.find({});
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
  },
};

module.exports = resolvers;
