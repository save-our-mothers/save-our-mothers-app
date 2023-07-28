//AgeChart.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

function AgeChart() {
  const dispatch = useDispatch();
  const ages = useSelector(state => state.chartReducers.ages);

  useEffect(() => {
    console.log('Fetching ages...');
    dispatch({ type: 'FETCH_AGES' });
  }, [dispatch]);

  useEffect(() => {
    console.log('Ages:', ages);
  }, [ages]);

  const ageRanges = ages.map(age => age.range); // Extract age ranges from data

  const option1 = {
    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
    title: {
      text: 'Age Range of Patients',
      textStyle: {
        color: 'white',
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        },
      },
    },
    legend: {
      data: ageRanges,
      textStyle: {
        color: '#fff',
      },
    },
    toolbox: {
      feature: {
        saveAsImage: {},
        dataView: { readOnly: false },
        magicType: { type: ['line', 'bar'] },
        restore: {},
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ageRanges,
        axisLabel: {
          color: '#fff',
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          color: '#fff',
        },
      },
    ],
    series: [
      {
        name: 'Age Range',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#00FF00',
            },
            {
              offset: 1,
              color: '#FFD700',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: ages.map(age => age.count),
      },
    ],
  };

  const option2 = {
    title: {
      subtext: '2020-2023',
      left: 'center',
      textStyle: {
        color: '#fff',
      },
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      textStyle: {
        color: '#fff',
      },
    },
    toolbox: {
      feature: {
        saveAsImage: {},
        dataView: { readOnly: false },
        magicType: { type: ['line', 'bar'] },
        restore: {},
      },
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: ages.map(age => ({
          value: age.count,
          name: age.range,
        })),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  return (
    <div className="age-div">
      <div>
        <ReactECharts
          option={option1}
          style={{width: '80%', margin: '0 auto' }}
        />
      </div>
      <div style={{ marginTop: '20px' }}>
        <ReactECharts
          option={option2}
          style={{width: '80%', margin: '0 auto' }}
        />
      </div>
    </div>
  );
}

export default AgeChart;
