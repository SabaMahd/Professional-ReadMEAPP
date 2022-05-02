const router = require('express').Router();
// Import all of the API routes from /api/index.js 
const apiRoutes = require('./api');
// waiting for the front-end codes to hook up
//const htmlRoutes = require('./html/html-routes');

// add prefix of `/api` to all of the api routes imported from the `api` directory
router.use('/api', apiRoutes);

//waiting for the front end here
//router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;