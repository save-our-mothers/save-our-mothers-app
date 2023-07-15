//patientinfo.router.js

const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
 // GET query will go here. Will finish once the query is completed. -gd

// TODO: GET Requests go here
//* GET Age
router.get('/ages', (req, res) => {
  console.log('GET /ages');
  const queryText = 'SELECT * FROM ages';

  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`ERROR in GET Age: ${error}`);
      res.sendStatus(500);
    });
});

// testing -gd
 

//* GET Gender
router.get('/gender', (req, res) => {
  console.log(`In Gender GET /gender`) 
  
  const queryText = `
    SELECT * FROM patients_unique
  `;

  pool.query(queryText)
    .then((result) => {
      console.log('GET /gender result:', result.rows);
      res.send(result.rows);
    }).catch(error => {
      console.log(`ERROR in GET Gender: ${error}`);
      res.sendStatus(500);
    });
}); // end Gender

//* GET Family Size
router.get('/family-size', (req, res) => {
  console.log('GET /family-size');
  const queryText = 'SELECT * FROM family_size';

  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`ERROR in GET Family Size: ${error}`);
      res.sendStatus(500);
    });
});
 // end Family Size


//*Jvisits - GET Patient Visits
router.get('/patient-visits', (req, res) => {
  console.log('GET /patient-visits');

  const queryText = 'SELECT * FROM patient_visits';

  pool
    .query(queryText)
    .then((result) => {
      console.log('GET /patient-visits result:', result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`ERROR in GET Patient Visits: ${error}`);
      res.sendStatus(500);
    });
});
//* GET Number of Patients
router.get('/num-of-patients', (req, res) => {
  console.log('GET /num-of-patients');

  const queryText = 'SELECT COUNT(*) AS num_of_patients FROM patients_unique';

  pool
    .query(queryText)
    .then((result) => {
      console.log('GET /num-of-patients result:', result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`ERROR in GET Number of Patients: ${error}`);
      res.sendStatus(500);
    });
});

//* GET Geo-Location
router.get('/locations', (req, res) => {
  console.log('GET /locations');
  const queryText = 'SELECT * FROM locations';

  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`ERROR in GET Locations: ${error}`);
      res.sendStatus(500);
    });
});// end Geo-Location
//*  GET Geo-Location
router.get('/geo-location', (req, res) => {
  console.log(`In Geo-Location GET /geo-location`);
  const queryText = 'SELECT * FROM locations';

  pool
    .query(queryText)
    .then((result) => {
      console.log('GET /geo-location result:', result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`ERROR in GET Geo-Location: ${error}`);
      res.sendStatus(500);
    });
});
//* GET Top 10 Prescriptions
router.get('/prescriptions', (req, res) => {
  console.log(`In Prescriptions`) 
  const queryText = 
  
    `SELECT * FROM prescriptions`;
  

  pool.query(queryText) 
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
//* POST AGES
router.post('/ages', (req, res) => {
  console.log('POST /ages with body:', req.body);
  const { range, count } = req.body;

  const query = 'INSERT INTO ages ("range", "count") VALUES ($1, $2) RETURNING *';
  const values = [range, count];

  pool.query(query, values)
    .then((result) => {
      console.log('POST /ages result:', result.rows[0]);
      const insertedRow = result.rows[0];
      res.send(insertedRow);
    })
    .catch((error) => {
      console.log('Error inserting data:', error);
      res.sendStatus(500);
    });
});
//* Jvisits - POST Patient Visits
router.post('/patient-visits', (req, res) => {
  console.log('POST /patient-visits with body:', req.body);
  const { count, type } = req.body;

  const query = 'INSERT INTO patient_visits ("count", "type") VALUES ($1, $2) RETURNING *';
  const values = [count, type];

  pool
    .query(query, values)
    .then((result) => {
      console.log('POST /patient-visits result:', result.rows[0]);
      const insertedRow = result.rows[0];
      res.send(insertedRow);
    })
    .catch((error) => {
      console.log('Error inserting data:', error);
      res.sendStatus(500);
    });
});

//*Jmap -POST Locations
router.post('/locations', (req, res) => {
  console.log('POST /locations with body:', req.body);
  const { neighborhood, city, count } = req.body;

  const query = 'INSERT INTO locations (neighborhood, city, count) VALUES ($1, $2, $3) RETURNING *';
  const values = [neighborhood, city, count];

  pool
    .query(query, values)
    .then((result) => {
      console.log('POST /locations result:', result.rows[0]);
      const insertedRow = result.rows[0];
      res.send(insertedRow);
    })
    .catch((error) => {
      console.log('Error inserting data:', error);
      res.sendStatus(500);
    });
});


// TODO: PUT Requests go here
//* Jvisits - PUT Patient Visits
router.put('/patient-visits/:id', (req, res) => {
  console.log('PUT /patient-visits/:id with body:', req.body, 'and id:', req.params.id);
  const { id } = req.params;
  const { count, type } = req.body;

  const query = 'UPDATE patient_visits SET "count" = $1, "type" = $2 WHERE id = $3 RETURNING *';
  const values = [count, type, id];

  pool
    .query(query, values)
    .then((result) => {
      console.log('PUT /patient-visits/:id result:', result.rows[0]);
      const updatedRow = result.rows[0];
      res.send(updatedRow);
    })
    .catch((error) => {
      console.log('Error updating data:', error);
      res.sendStatus(500);
    });
});



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
router.put('/ages/:id', (req, res) => {
  console.log('PUT /ages/:id with body:', req.body, 'and id:', req.params.id);
  const { id } = req.params;
  const { range, count } = req.body;

  const query = 'UPDATE ages SET "range" = $1, "count" = $2 WHERE id = $3 RETURNING *';
  const values = [range, count, id];

  pool.query(query, values)
    .then((result) => {
      console.log('PUT /ages/:id result:', result.rows[0]);
      const updatedRow = result.rows[0];
      res.send(updatedRow);
    })
    .catch((error) => {
      console.log('Error updating data:', error);
      res.sendStatus(500);
    });
});





// TODO: DELETE Requests go here
//* DELETE All(?)
router.delete('/delete', (req, res) => {
  // DELETE FROM "table"? -gd
  let queryText = `
  
  `;

  pool.query(queryText) // can add [req.params.id] if needed -gd
    .then((result) => {
      res.sendStatus(200);
    }).catch((error) => {
      console.log(`ERROR in DELETE: ${error}`);
      res.sendStatus(500);
    })
})

router.delete('/ages/:id', (req, res) => {
  console.log('DELETE /ages/:id with id:', req.params.id);
  const { id } = req.params;

  const query = 'DELETE FROM ages WHERE id = $1';
  const values = [id];

  pool.query(query, values)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error deleting data:', error);
      res.sendStatus(500);
    });
});
// DELETE Patient Unique
router.delete('/patients-unique/:id', (req, res) => {
  console.log('DELETE /patients-unique/:id with id:', req.params.id);
  const { id } = req.params;

  const query = 'DELETE FROM patients_unique WHERE id = $1';
  const values = [id];

  pool
    .query(query, values)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error deleting data:', error);
      res.sendStatus(500);
    });
});

module.exports = router;
