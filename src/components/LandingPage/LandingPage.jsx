import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import './LandingPage.css';

// Material UI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// Content Import will hold all graphs, potentially -gd
import Content from './Content.jsx'

// Importing all charts and graphs -gd
import AgeChart from '../Jchart/Jchart';
import GenderChart from '../Jgender/Jgender';
import FamilySize from '../Jfam/Jfam';
import PatientVisits from '../Jvisits/Jvisits';
import Prescriptions from '../TopMeds/TopMeds';
import GeoMap from '../Jmap/Jmap';

function LandingPage() {
  const [heading, setHeading] = useState('Safe Childbirth Foundation');
  const windowStatus = useSelector(store => store.landingPageReducers.windowStatus)
  const dispatch = useDispatch();

  const expandWindow = (e, chartType) => {
    dispatch({ type: 'SET_CHART_TYPE', payload: chartType })
    dispatch({ type: 'TOGGLE_WINDOW_STATUS' })
    
  }

  return (
    <div className="container">
      <h2>{heading}</h2>

      <Box sx={{ flexGrow: 1 }}>
        {
          windowStatus === false ? (
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={2} sm={4} md={4}>
                <p>Age Graph</p>
                <div className="view-border" onClick={(e) => expandWindow(e, 'age')} >
                  <AgeChart />
                </div>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <p>Gender Graph</p>
                <div className="view-border" onClick={(e) => expandWindow(e, 'gender')} >
                  <GenderChart />
                </div>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <p>Family Size Graph</p>
                <div className="view-border" onClick={(e) => expandWindow(e, 'family-size')} >
                  <FamilySize />
                </div>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <p>Top 10 Prescriptions Graph</p>
                <div className="view-border" onClick={(e) => expandWindow(e, 'prescriptions')} >
                  <Prescriptions />
                </div>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <p>Geo Location Map</p>
                <div className="view-border" onClick={(e) => expandWindow(e, 'map')} >
                  <GeoMap />
                </div>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <p>Number of Patients Chart</p>
                <div className="view-border" onClick={(e) => expandWindow(e, '#-of-patients')} >
                  {/* Something isn't working here -gd */}
                  <PatientVisits />
                  <h3>Something isn't working with this component -GD</h3>
                </div>
              </Grid>
            </Grid>
          ) : (
            <Content />
          )
        }
      </Box>
    </div>
  );
}

export default LandingPage;
