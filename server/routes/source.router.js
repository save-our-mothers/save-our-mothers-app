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
    await axios.get(`https://somnow-reports.azurewebsites.net/api/openemr?code=${process.env.api_key}`)
        .then(response => {
            // console.log(response.data);
            data = response.data.data;
            console.log('data', data);
        }).catch(error => {
            console.log(`Error in GET: ${error}`);
            res.sendStatus(500);
        });

    // In production, data will be set equal to the axios response from above
    // data = emrResponse.data;

    // connect to PostGreSQL database
    const db = await pool.connect();
    const tables = [
        "patients_unique",
        "locations",
        "prescriptions",
        "ages",
        "family_size",
        "patient_visits"
    ]

    try {
        // Begin SQL queries
        await db.query('BEGIN');

        console.log(data);

        for await (let table of tables) {
            db.query(`DELETE FROM ${table} WHERE id > 0;`);
        }

        //! Insert for patients_unique
        let queryText = `
            INSERT INTO patients_unique (count, gender)
            VALUES ($1, $2);
        `;
    
        await db.query(queryText, [data.patients.Male, 'Male']);
        await db.query(queryText, [data.patients.Female, 'Female']);

        //! Insert for locations
        queryText = `
            INSERT INTO locations (neighborhood, city, count)
            VALUES ($1, $2, $3);
        `
        for await (let location of data.locations) {
            db.query(queryText, [location.Neighborhood, location.city, location.Patients]);
        }

        //! Insert for prescriptions
        queryText = `
            INSERT INTO prescriptions (drug_name, count)
            VALUES ($1, $2);
        `;

        for await (let prescription of data.prescriptions) {
            db.query(queryText, [prescription.Name, prescription.Prescriptions]);
        }

        //! Insert for ages
        queryText = `
            INSERT INTO ages (range, count)
            VALUES ($1, $2);
        `;

        await db.query(queryText, ["5 and Under", data.ages["5 and Under"]]);
        await db.query(queryText, ["6 to 17", data.ages["6 to 17"]]);
        await db.query(queryText, ["18 to 30", data.ages["18 to 30"]]);
        await db.query(queryText, ["30+", data.ages["30+"]]);

        //! Insert for family size
        queryText = `
            INSERT INTO family_size (range, count)
            VALUES ($1, $2)
        `;

        await db.query(queryText, ["1 to 5", data.familySize["1 to 5"]]);
        await db.query(queryText, ["5 to 10", data.familySize["5 to 10"]]);
        await db.query(queryText, ["10+", data.familySize["10+"]]);

        //! Insert for patient_visits
        queryText = `
            INSERT INTO patient_visits 
            (year, 
            year_total,
            week_1,
            week_2,
            week_3,
            week_4,
            week_5,
            week_6,
            week_7,
            week_8,
            week_9,
            week_10,
            week_11,
            week_12,
            week_13,
            week_14,
            week_15,
            week_16,
            week_17,
            week_18,
            week_19,
            week_20,
            week_21,
            week_22,
            week_23,
            week_24,
            week_25,
            week_26,
            week_27,
            week_28,
            week_29,
            week_30,
            week_31,
            week_32,
            week_33,
            week_34,
            week_35,
            week_36,
            week_37,
            week_38,
            week_39,
            week_40,
            week_41,
            week_42,
            week_43,
            week_44,
            week_45,
            week_46,
            week_47,
            week_48,
            week_49,
            week_50,
            week_51,
            week_52,
            month_1,
            month_2,
            month_3,
            month_4,
            month_5,
            month_6,
            month_7,
            month_8,
            month_9,
            month_10,
            month_11,
            month_12,
            q_1,
            q_2,
            q_3,
            q_4
            )
            VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48, $49, $50, $51, $52, $53, $54, $55, $56, $57, $58, $59, $60, $61, $62, $63, $64, $65, $66, $67, $68, $69, $70 
            )
        `;
        
        
        for await (let year of data.patient_visits) {
            let yearObject = year;
            let eachYear = Object.keys(yearObject)[0];
            let addYear = yearObject[eachYear];
            // console.log(addYear['1']);
            // console.log(addYear.year_total);
            db.query(queryText, [
                addYear.year,
                addYear.year_total,
                addYear['1'],
                addYear['2'],
                addYear['3'],
                addYear['4'],
                addYear['5'],
                addYear['6'],
                addYear['7'],
                addYear['8'],
                addYear['9'],
                addYear['10'],
                addYear['11'],
                addYear['12'],
                addYear['13'],
                addYear['14'],
                addYear['15'],
                addYear['16'],
                addYear['17'],
                addYear['18'],
                addYear['19'],
                addYear['20'],
                addYear['21'],
                addYear['22'],
                addYear['23'],
                addYear['24'],
                addYear['25'],
                addYear['26'],
                addYear['27'],
                addYear['28'],
                addYear['29'],
                addYear['30'],
                addYear['31'],
                addYear['32'],
                addYear['33'],
                addYear['34'],
                addYear['35'],
                addYear['36'],
                addYear['37'],
                addYear['38'],
                addYear['39'],
                addYear['40'],
                addYear['41'],
                addYear['42'],
                addYear['43'],
                addYear['44'],
                addYear['45'],
                addYear['46'],
                addYear['47'],
                addYear['48'],
                addYear['49'],
                addYear['50'],
                addYear['51'],
                addYear['52'],
                addYear['53'],
                addYear['54'],
                addYear['55'],
                addYear['56'],
                addYear['57'],
                addYear['58'],
                addYear['59'],
                addYear['60'],
                addYear['61'],
                addYear['62'],
                addYear['63'],
                addYear['64'],
                addYear['65'],
                addYear['66'],
                addYear['67'],
                addYear['68']
            ])
        };

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