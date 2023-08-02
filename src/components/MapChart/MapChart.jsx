//Jmap.jsx
//npm install react-medium-image-zoom
//npm install @mui/material 

import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as echarts from 'echarts';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Somalia from '../Nav/Logos/MarkaDistrict.png';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


function MapChart() {
    const dispatch = useDispatch();
    const locations = useSelector((state) => state.chartReducers.locations);



    useEffect(() => {
        console.log('Fetching locations...');
        dispatch({ type: 'FETCH_LOCATIONS' });
    }, [dispatch]);


    useEffect(() => {
console.log('Locations:', locations);
// Call the function to render the chart with the retrieved data
renderChart(locations);
}, [locations]);


const chartRef = useRef(null);

const renderChart = (data) => {
const chartDom = chartRef.current;
const myChart = echarts.init(chartDom);

const option = {

            title: {
                text: 'Location Data',
textStyle: {
color: 'white',
},
},
 legend: {},
 xAxis: {
type: 'category',
data: data.map((location) => location.neighborhood),
},
yAxis: {
type: 'value',
 },

 series: [
 {
                    name: 'Count',
                    type: 'bar',
                    data: data.map((location) => location.count),
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#66a8ff' },
                            { offset: 1, color: '#0084ff' },
                        ]),
                    },
                },
            ],
            toolbox: {
                show: true,
                feature: {

                    dataView: { readOnly: false },
                    magicType: { type: ['line', 'bar'] },
                    restore: {},
                    saveAsImage: {},
                },
                textStyle: {
                    color: 'white',
                },
            },

        };

        myChart.setOption(option);
    };

    return (
        <div style={{ width: '100%' }}>
          <ImageList variant="quilted" cols={1} rowHeight={200}>
            <ImageListItem>
              <Zoom>
                <img src={Somalia} alt="Somalia" style={{ width: '100%', height: '100%' }} />
              </Zoom>
            </ImageListItem>
          </ImageList>
          <div ref={chartRef} style={{ height: 200, width: '100%' }} />
        </div>
      );
    }
    
    export default MapChart;
    