const express = require('express');
const router = express.Router();

// @route GET api/post
// @desc TEST Route
// @access Public
router.get('/', (req,res) => {
    res.send('POST ROUTE')
})

module.exports = router;