const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddlewares.js');
const controller = require("../controllers/tvshowsControllers.js")

router.use(authMiddleware); // Protect all routes below

router.get('/', controller.getAllTvShows);
router.post('/', controller.createTvShow);
router.put('/:id', controller.updateTvShow);
router.delete('/:id', controller.deleteTvShow);
module.exports = router;