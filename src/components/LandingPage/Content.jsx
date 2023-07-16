import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './Content.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';


import Julie from '../Jchart/Jchart';
import Jfam from '../Jfam/Jfam';
import Jgender from '../Jgender/Jgender';
import Jvisits from '../Jvisits/Jvisits';
import Jmap from '../Jmap/Jmap';
import Junique from '../Junique/Junique';
import TopMeds from '../TopMeds/TopMeds';
import Drugs from '../TopMeds/Drugs';

function Content() {
  const chartType = useSelector(store => store.landingPageReducers.chartType);
  const windowStatus = useSelector(store => store.landingPageReducers.windowStatus);
  const dispatch = useDispatch();
  const [buttonValue, setButtonValue] = useState('')

  const theme = createTheme({
    palette: {
      error: {
        main: grey[500]
      }
    }
  })

  const closeWindow = () => {
    if (windowStatus === true) {
      dispatch({ type: 'TOGGLE_WINDOW_STATUS' });
    }
    dispatch({ type: 'SET_CHART_TYPE', payload: '' });
  }

  const handleButtonValue = (e, val) => {
    setButtonValue(val);
    console.log(val)
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
              {/* <Drugs /> */}
              {/* Julie's code block above */}
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
              <Jvisits buttonValue={buttonValue}/>
              <Stack direction="row" spacing={1}>
                <b>View Over Time:</b>
                <Button color="success" variant="contained" size="small" onClick={e => handleButtonValue(e, 'weekly')}>Weekly</Button>
                <Button color="success" variant="contained" size="small" onClick={e => handleButtonValue(e, 'monthly')}>Monthly</Button>
                <Button color="success" variant="contained" size="small" onClick={e => handleButtonValue(e, 'quarterly')}>Quarterly</Button>
                <Button color="success" variant="contained" size="small" onClick={e => handleButtonValue(e, 'Annually')}>Annually</Button>
                <Button color="success" variant="contained" size="small" onClick={e => handleButtonValue(e, 'Overall')}>Overall</Button>
              </Stack>
            </div>
          ) : (
            <div className="content-div">
              <h2>Please Select a View</h2>
            </div>
          )
        }
      </div>
      <ThemeProvider theme={theme}>
      <Button color="error" variant="outlined" size="small" className="close-btn" onClick={closeWindow}>close</Button>
      </ThemeProvider>
    </div>
  )
}

export default Content;