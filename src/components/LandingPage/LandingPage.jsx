import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import './LandingPage.css';

// Material UI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// Content Import will hold all graphs, potentially -gd
import Content from './Content.jsx'

function LandingPage() {
  const [heading, setHeading] = useState('Safe Childbirth Foundation');
  const windowStatus = useSelector(store => store.landingPageReducers.windowStatus)
  const history = useHistory();
  const dispatch = useDispatch();

  const expandWindow = (e, chartType) => {
    dispatch({ type: 'SET_CHART_TYPE', payload: chartType })
    dispatch({ type: 'TOGGLE_WINDOW_STATUS' })
    console.log(`windowStatus changed`)
    console.log(`value: `, chartType)
  }

  return (
    <div className="container">
      <h2>{heading}</h2>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4}>
            <p>Age Graph</p>
            <div className="view-border" onClick={(e) => expandWindow(e, 'age')} >
              <h2>Age stuff here</h2>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <p>Gender Graph</p>
            <div className="view-border" onClick={(e) => expandWindow(e, 'gender')} >
            <h2>Gender stuff here</h2>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <p>Family Size Graph</p>
            <div className="view-border" onClick={(e) => expandWindow(e, 'family-size')} >
            <h2>Family stuff here</h2>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <p>Top 10 Prescriptions Graph</p>
            <div className="view-border" onClick={(e) => expandWindow(e, 'prescriptions')} >
            <h2>Prescription stuff here</h2>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <p>Geo Location Map</p>
            <div className="view-border" onClick={(e) => expandWindow(e, 'map')} >
            <h2>Map stuff here</h2>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <p>Number of Patients Chart</p>
            <div className="view-border" onClick={(e) => expandWindow(e, '#-of-patients')} >
            <h2>Patient count stuff here</h2>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default LandingPage;
