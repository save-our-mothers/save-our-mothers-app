const express = require('express');
const router = express.Router();
require('dotenv').config();
const axios = require('axios');
const emrResponse = require('../response');
const pool = require('../modules/pool');
let data = {};

router.get('/', async (req, res) => {
    // ! The below axios request has been commented out temporarily because the function app
    // ! is not yet connected to a live MySQL database.
    // ! So in the meantime, a sample response object response is being used from the response.js file
    // axios.get(`https://saveourmothers.azurewebsites.net/api/openemr?code=${process.env.api_key}`)
    //     .then(response => {
    //         console.log(response.data);
    //         router.post('/', emrResponse);
    //     }).catch(error => {
    //         console.log(`Error in GET: ${error}`);
    //         res.sendStatus(500);
    //     });

    // In production, data will be set equal to the axios response from above
    data = emrResponse.data;
    // connect to PostGreSQL database
    const db = await pool.connect();
    const tables = [
        "patients_unique",
        "locations",
        "prescriptions",
        "ages"
    ]

    try {
        // Begin SQL queries
        await db.query('BEGIN');

        for await (let table of tables) {
            db.query(`DELETE FROM ${table} WHERE id > 0;`);
        }

        let queryText = `
            INSERT INTO patients_unique (count, gender)
            VALUES ($1, $2);
        `;
    
        await db.query(queryText, [data.patients.Male, 'Male']);
        await db.query(queryText, [data.patients.Female, 'Female']);

        queryText = `
            INSERT INTO locations (neighborhood, city, count)
            VALUES ($1, $2, $3);
        `
        for await (let location of data.locations) {
            db.query(queryText, [location.Neighborhood, location.city, location.Patients]);
        }

        queryText = `
            INSERT INTO prescriptions (drug_name, count)
            VALUES ($1, $2);
        `;

        for await (let prescription of data.prescriptions) {
            db.query(queryText, [prescription.drug, prescription.Prescriptions]);
        }

        queryText = `
            INSERT INTO ages (range, count)
            VALUES ($1, $2);
        `;

        await db.query(queryText, ["5 and Under", data.ages["5 and Under"]]);
        await db.query(queryText, ["5 to 9", data.ages["5 to 9"]]);
        await db.query(queryText, ["10 and Over", data.ages["10 and Over"]]);

        // If no errors, all queries will be committed to datbase
        await db.query('COMMIT');

        res.sendStatus(200);
    } catch (error) {
        // If a query has an error, none of the queries will succeed and 
        // an error will be shown
        console.log('ROLLBACK', error);
        await db.query('ROLLBACK');
        res.sendStatus(500);
    }
});

module.exports = router;