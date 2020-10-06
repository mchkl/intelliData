import React, { useState, useEffect } from 'react';
import Graph from '../components/Graph';
import Table from '../components/Table';
import { css } from 'glamor';

const Test = ({ data }) => {
  const [chartData, setChartData] = useState({});
  const [chosenGraph, setChosenGraph] = useState(0);

  useEffect(() => {
    if (Object.values(data)[chosenGraph]) {
      let newChartData = { ...chartData };
      const currGraph = Object.values(data)[chosenGraph];
      newChartData.data = currGraph.times.reduce((prev, curr, index) => {
        return [
          ...prev,
          {
            times: curr,
            values: currGraph.values[index]
          }
        ];
      }, []);
      newChartData.color = currGraph.color;
      setChartData(newChartData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenGraph, data]);

  const style = {
    ' h1': {
      textAlign: 'center'
    },
    ' .page-content': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '40px',
      flexFlow: 'column',

      ' div:first-of-type': {
        marginBottom: '40px'
      },

      '@media(min-width: 950px)': {
        flexFlow: 'row'
      }
    }
  };

  return (
    <div {...css(style)}>
      <h1>Data visualization</h1>
      <div className="page-content">
        <Table
          tableData={data}
          onClick={setChosenGraph}
          chosenGraph={chosenGraph}
        />
        <Graph chartData={chartData} />
      </div>
    </div>
  );
};

export default Test;
