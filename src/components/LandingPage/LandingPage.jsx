import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// Material UI
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function LandingPage() {
  const [heading, setHeading] = useState('Safe Childbirth Foundation');
  const history = useHistory();

  return (
    <div className="container">
      <h2>{heading}</h2>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div>
              <p>Age Graph</p>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div>
              <p>Gender Graph</p>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div>
              <p>Family Size Graph</p>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div>
              <p>Top 10 Prescriptions Graph</p>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div>
              <p>Geo Location Map</p>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div>
              <p>Number of Patients Chart</p>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default LandingPage;
