/**
 * This is a basic demo file has one rooute a get request used by the React Demo
 */
const express = require('express');
const demo_routes = express.Router();

// An api endpoint that returns a short list of items
// Responds to /api/demo/whoami
demo_routes.get('/whoami', (req, res) => {
    var list = ["this is the comment service"];
    res.json(list);
});


module.exports = demo_routes;
