const express = require('express');
const router = express.Router();
require('dotenv').config();

router.get(`https://saveourmothers.azurewebsites.net/api/openemr?code=${process.env.api_key}`, (req, res) => {
    console.log(req);
});





module.exports = router;