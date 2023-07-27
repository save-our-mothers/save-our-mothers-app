//FamChart.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

function Jfam() {
  const dispatch = useDispatch();
  const familySize = useSelector((state) => state.chartReducers.familySize);

  useEffect(() => {
    console.log('Fetching family size...');
    dispatch({ type: 'FETCH_FAMILY_SIZE' });
  }, [dispatch]);

  const gradients = [
    [
      {
        offset: 0,
        color: 'rgba(255, 128, 128, 1)', // Start color
      },
      {
        offset: 1,
        color: 'rgba(255, 0, 0, 1)', // End color
      },
    ],
    [
      {
        offset: 0,
        color: 'green', // Start color
      },
      {
        offset: 1,
        color: '#95DE64', // End color
      },
    ],
    [
      {
        offset: 0,
        color: 'rgba(255, 255, 128, 1)', // Start color
      },
      {
        offset: 1,
        color: 'rgba(255, 255, 0, 1)', // End color
      },
    ],
    [
      {
        offset: 0,
        color: 'purple', // Start color
      },
      {
        offset: 1,
        color: 'magenta', // End color
      },
    ],
    // Add more gradients here...
  ];

  const colorPalette = ['#FF4D4F', '#95DE64', '#FFC53D', 'purple']; // Define the color palette for bar chart

  const generatePieOption = () => {
    const option = {
      title: {
        text: 'Family Size Range',
        textStyle: {
          color: 'white',
          fontSize: 16,
          fontWeight: 'bold',
        },
        top: '5%',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      legend: {
        orient: 'horizontal',
        top: '12%',
        itemWidth: 12,
        itemHeight: 12,
        itemGap: 16,
        textStyle: {
          color: 'white',
        },
        data: familySize.map((size) => size.range),
      },
      toolbox: {
        feature: {
          saveAsImage: {},
          dataView: { readOnly: false },
          restore: {},
        },
      },
      series: [
        {
          name: 'Family Size',
          type: 'pie',
          radius: '50%',
          center: ['50%', '55%'], // Adjust the vertical position of the pie chart
          data: familySize.map((size, index) => ({
            value: size.count,
            name: size.range,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 1, gradients[index % gradients.length]),
            },
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
    return option;
  };

  const generateBarOption = () => {
    const option = {
      color: colorPalette,
      title: {
        text: 'Family Size Range',
        textStyle: {
          color: 'white',
          fontSize: 16,
          fontWeight: 'bold',
        },
        top: '5%',
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      toolbox: {
        feature: {
          saveAsImage: {},
          dataView: { readOnly: false },
          restore: {},
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
      xAxis: {
        type: 'category',
        axisLabel: {
          color: 'white',
        },
        data: familySize.map((size) => size.range),
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: 'white',
        },
      },
      series: [
        {
          name: 'Family Size',
          type: 'bar',
          barWidth: '60%',
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(1, 0, 0, 1)',
            },
          },
          data: familySize.map((size, index) => ({
            value: size.count,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: colorPalette[index],
                },
                {
                  offset: 1,
                  color: 'rgba(0, 0, 0, 0)', // Use transparent color as the end of the gradient
                },
              ]),
            },
          })),
        },
      ],
    };
    return option;
  };

  return (
    <>
      <div>
        <ReactECharts
          option={generatePieOption()}
          style={{width: '80%', margin: '0 auto' }}
        />
      </div>
      <div>
        <ReactECharts
          option={generateBarOption()}
          style={{width: '80%', margin: '0 auto', paddingBottom: '50px' }}
        />
      </div>
    </>
  );
}

export default Jfam;
