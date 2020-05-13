const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/', blogController.allBlogPost);
router.get('/:blogId', blogController.oneBlogPost);
router.post('/', blogController.addBlogPost);
router.put('/:blogId', blogController.updateBlogPost);
router.delete('/:blogId', blogController.deleteBlogPost);

module.exports = router;

