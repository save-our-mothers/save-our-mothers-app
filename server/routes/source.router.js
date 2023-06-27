const express = require('express');
const router = express.Router();
require('dotenv').config();
const axios = require('axios');

router.get('/', (req, res) => {
    axios.get(`https://saveourmothers.azurewebsites.net/api/openemr?code=${process.env.api_key}`)
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        }).catch(error => {
            console.log(`Error in GET: ${error}`);
            res.sendStatus(500);
        });
});





module.exports = router;