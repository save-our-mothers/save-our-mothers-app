const express = require('express');
const router = express.Router();
require('dotenv').config();
const axios = require('axios');
const emrResponse = require('../response');
const pool = require('../modules/pool');
let data = {};

router.get('/', async (req, res) => {
    // axios.get(`https://saveourmothers.azurewebsites.net/api/openemr?code=${process.env.api_key}`)
    //     .then(response => {
    //         console.log(response.data);
    //         axios.post('/', response.data);
    //     }).catch(error => {
    //         console.log(`Error in GET: ${error}`);
    //         res.sendStatus(500);
    //     });
    try {
        data = emrResponse;
        axios.post('/', (req, res) => {
            res.sendStatus(200);
        });
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


router.post('/', (req, res) => {
    console.log('in POST request', req.body);
})



module.exports = router;