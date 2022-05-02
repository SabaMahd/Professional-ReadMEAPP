const router = require('express').Router();
const userRoutes = require('./user-routes');
const readMeRoutes = require('./readMe-routes');

// add prefix of `/users` to routes created in `user-routes.js`
router.use('/users', userRoutes);

// add prefix of `/readme` to routes created in `readMe-routes.js`
router.use('/readme', readMeRoutes);

module.exports = router;