const express = require('express');
const router = express.Router();

// This is a sample route to check if the API is working.
// You can add all your other application routes here.
router.get('/status', (req, res) => {
  res.status(200).json({ message: 'API is up and running!' });
});

// Export the router so it can be used in app.js
module.exports = router;
