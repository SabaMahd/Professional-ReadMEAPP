const router = require('express').Router();
const {
    getAllReadme,
    getReadmeById,
    createReadme,
    removeReadme
  } = require('../../controllers/readme-controller');

// Set up GET all and POST at /api/readme
router
  .route('/')
  .get(getAllReadme)
  .post(createReadme);

// Set up GET oneat /api/readme/:id
router
  .route('/:id')
  .get(getReadmeById)


// /api//<userid>/<readmeId>
router.route('/:userId/:readmeId').delete(removeReadme);

module.exports = router;