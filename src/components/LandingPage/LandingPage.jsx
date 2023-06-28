import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// Material UI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// Content Import will hold all graphs, potentially -gd
import Content from './Content.jsx'

function LandingPage() {
  const [heading, setHeading] = useState('Safe Childbirth Foundation');
  const history = useHistory();

  const expandWindow = () => {

  }

  return (
    <div className="container">
      <h2>{heading}</h2>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4}>
            <p>Age Graph</p>
            <div className="view-border" onClick={expandWindow}>
              <Content />
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <p>Gender Graph</p>
            <div className="view-border">
              <Content />
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <p>Family Size Graph</p>
            <div className="view-border">
              <Content />
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <p>Top 10 Prescriptions Graph</p>
            <div className="view-border">
              <Content />
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <p>Geo Location Map</p>
            <div className="view-border">
              <Content />
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <p>Number of Patients Chart</p>
            <div className="view-border">
              <Content />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default LandingPage;
