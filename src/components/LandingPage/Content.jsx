import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './Content.css'


import Julie from '../Jchart/Jchart';
import Jfam from '../Jfam/Jfam';
import Jgender from '../Jgender/Jgender';
import Jvisits from '../Jvisits/Jvisits';
import Jmap from '../Jmap/Jmap';
import Junique from '../Junique/Junique';
import TopMeds from '../TopMeds/TopMeds';

function Content() {
  const chartType = useSelector(store => store.landingPageReducers.chartType);
  const windowStatus = useSelector(store => store.landingPageReducers.windowStatus);
  const dispatch = useDispatch();

  const closeWindow = () => {
    if (windowStatus === true) {
      dispatch({ type: 'TOGGLE_WINDOW_STATUS' });
    }
    dispatch({ type: 'SET_CHART_TYPE', payload: '' });
  }

  return (
    <div className="popup-whole">
      <div className="popup">
        {
          chartType === 'age' ? (


            <div className="content-div">
              <h3>Age</h3>
              <p>
                <Julie />
              </p>
              <Stack direction="row" spacing={1}>
                <b>View by Age Range:</b>
                <Button color="success" variant="contained" size="small" >5 - 17</Button>
                <Button color="success" variant="contained" size="small" >18 - 30</Button>
                <Button color="success" variant="contained" size="small" >Over 30</Button>
              </Stack>
            </div>
          ) : chartType === 'gender' ? (
            <div className="content-div">
              <h3>Gender</h3>
          <Junique />
              <Jgender />
            </div>
          ) : chartType === 'family-size' ? (
            <div className="content-div">
              <h3>Family Size</h3>
              <Jfam />
            </div>
          ) : chartType === 'prescriptions' ? (
            <div className="content-div">
              <TopMeds />
            </div>
          ) : chartType === 'map' ? (
            <div className="content-div">
              <h3>Geo Location Map</h3>
              <Jmap />
            </div>
          ) : chartType === '#-of-patients' ? (
            <div className="content-div">
              <h3>Number of Patients</h3>
             <Jvisits/>
              <Stack direction="row" spacing={1}>
                <b>View Over Time:</b>
                <Button color="success" variant="contained" size="small" >Weekly</Button>
                <Button color="success" variant="contained" size="small" >Monthly</Button>
                <Button color="success" variant="contained" size="small" >Quarterly</Button>
                <Button color="success" variant="contained" size="small" >Annually</Button>
                <Button color="success" variant="contained" size="small" >Overall</Button>
              </Stack>
            </div>
          ) : (
            <div className="content-div">
              <h2>Please Select a View</h2>
            </div>
          )
        }
      </div>
      <Button color="error" variant="outlined" size="small" className="close-btn" onClick={closeWindow}>close</Button>
    </div>
  )
}

export default Content;