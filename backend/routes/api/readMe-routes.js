const router = require('express').Router();
const {
    addReadMe,
    removeReadme
  } = require('../../controllers/readme-controller');

// /api/users/<userId>
router.route('/:userId').post(addReadMe);


// /api//<userid>/<readmeId>
router.route('/:userId/:readmeId').delete(removeReadme);

module.exports = router;