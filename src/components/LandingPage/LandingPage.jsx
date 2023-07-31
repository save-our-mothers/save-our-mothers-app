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
import AgeChart from '../AgeChart/AgeChart';
import GenderChart from '../GenderChart/GenderChart';
import FamilySize from '../FamChart/FamChart';
import Jvisits from '../Jvisits/JvisitsOverall';
import Prescriptions from '../TopMeds/TopMeds';
import GeoMap from '../MapChart/MapChart';
// import Prescriptions from '../TopMeds/Drugs'; 
// Julie's code above

function LandingPage() {
  const windowStatus = useSelector(store => store.landingPageReducers.windowStatus)
  const dispatch = useDispatch();

  const expandWindow = (e, chartType) => {
    dispatch({ type: 'SET_CHART_TYPE', payload: chartType })
    dispatch({ type: 'TOGGLE_WINDOW_STATUS' })

  }

  return (
    <div className="container">
      <h2><center><i>Safe Childbirth Foundation</i> | <i>Bulajan Mother</i></center></h2>

      <Box sx={{ flexGrow: 1 }}>
        {
          windowStatus === false ? (
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={2} sm={4} md={4}>
                <div className="view-border" onClick={(e) => expandWindow(e, '#-of-patients')} >
                  <h3><center>Number of Patients</center></h3>
                </div>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <div className="view-border" onClick={(e) => expandWindow(e, 'age')} >
                  <h3><center>Age Ranges</center></h3>
                </div>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <div className="view-border" onClick={(e) => expandWindow(e, 'gender')} >
                <h3><center>Gender</center></h3>
                </div>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <div className="view-border" onClick={(e) => expandWindow(e, 'family-size')} >
                <h3><center>Family Sizes</center></h3>
                </div>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <div className="view-border" onClick={(e) => expandWindow(e, 'prescriptions')} >
                <h3><center>Top 10 Medications</center></h3>
                </div>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <div className="view-border" onClick={(e) => expandWindow(e, 'map')} >
                <h3><center>Geo-Locations Map</center></h3>
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