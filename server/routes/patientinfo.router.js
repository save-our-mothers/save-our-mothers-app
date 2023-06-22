const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// TODO: GET Requests go here
//* GET Age
router.get('/age', (req, res) => {
  console.log(`In Age`) // testing -gd
  // GET query will go here. Will finish once the query is completed. -gd
  const queryText = `
    
  `;

  pool.query(queryText, [req.user.id]) // req.user.id can change accordingly -gd
    .then((result) => {
      res.send(result.rows);
    }).catch(error => {
      console.log(`ERROR in GET Age: ${error}`);
      res.sendStatus(500);
    })
}); // end Age

//* GET Gender
router.get('/gender', (req, res) => {
  console.log(`In Gender`) // testing -gd
  // GET query will go here. Will finish once the query is completed. -gd
  const queryText = `
    
  `;

  pool.query(queryText, [req.user.id]) // req.user.id can change accordingly -gd
    .then((result) => {
      res.send(result.rows);
    }).catch(error => {
      console.log(`ERROR in GET Gender: ${error}`);
      res.sendStatus(500);
    })
}); // end Gender

//* GET Family Size
router.get('/family-size', (req, res) => {
  console.log(`In Family Size`) // testing -gd
  // GET query will go here. Will finish once the query is completed. -gd
  const queryText = `
    
  `;

  pool.query(queryText, [req.user.id]) // req.user.id can change accordingly -gd
    .then((result) => {
      res.send(result.rows);
    }).catch(error => {
      console.log(`ERROR in GET Family Size: ${error}`);
      res.sendStatus(500);
    })
}); // end Family Size

//* GET Geo-Location
router.get('/geo-location', (req, res) => {
  console.log(`In Geo-Location`) // testing -gd
  // GET query will go here. Will finish once the query is completed. -gd
  const queryText = `
    
  `;

  pool.query(queryText, [req.user.id]) // req.user.id can change accordingly -gd
    .then((result) => {
      res.send(result.rows);
    }).catch(error => {
      console.log(`ERROR in GET Geo-Location: ${error}`);
      res.sendStatus(500);
    })
}); // end Geo-Location

//* GET Top 10 Prescriptions
router.get('/prescriptions', (req, res) => {
  console.log(`In Prescriptions`) // testing -gd
  // GET query will go here. Will finish once the query is completed. -gd
  const queryText = `
    
  `;

  pool.query(queryText, [req.user.id]) // req.user.id can change accordingly -gd
    .then((result) => {
      res.send(result.rows);
    }).catch(error => {
      console.log(`ERROR in GET Prescriptions: ${error}`);
      res.sendStatus(500);
    })
}); // end Prescriptions

//* GET # of Patients
router.get('/#-of-patients', (req, res) => {
  console.log(`In # of Patients`) // testing -gd
  // GET query will go here. Will finish once the query is completed. -gd
  const queryText = `
    
  `;

  pool.query(queryText, [req.user.id]) // req.user.id can change accordingly -gd
    .then((result) => {
      res.send(result.rows);
    }).catch(error => {
      console.log(`ERROR in GET # of Patients: ${error}`);
      res.sendStatus(500);
    })
}); // end # of Patients


// TODO: POST Requests go here
router.post('/', (req, res) => {
  // POST route code here
  //* Will probably be an async await POST request, which 
  //* I can do after we get our database looking more complete -gd
});

// TODO: PUT Requests go here
//* PUT Database Request
router.put('/update', (req, res) => {
  //* I think this PUT will only work after CSV Upload? -gd
  console.log(`In PUT Request`);
  let putData = req.body;
  let queryText = `
  
  `;

  pool.query(queryText, [putData])
    .then((result) => {
      res.sendStatus(200);
    }).catch((error) => {
      console.log(`ERROR in PUT: ${error}`)
      res.sendStatus(500);
    })
})


// TODO: DELETE Requests go here

module.exports = router;
