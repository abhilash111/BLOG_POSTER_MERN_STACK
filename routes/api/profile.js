const express = require('express');
const router = express.Router();

// @route GET api/profile
// @desc TEST Route
// @access Public
router.get('/', (req,res) => {
    res.send('profile ROUTE')
})

module.exports = router;