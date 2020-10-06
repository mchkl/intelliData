import React from 'react';
import { css } from 'glamor';

const CustomTooltip = ({ active, payload }) => {
  const tooltipStyle = {
    backgroundColor: '#c0c0de26',
    padding: '10px'
  };

  if (active && payload) {
    return (
      <div {...css(tooltipStyle)}>
        <p className="label">{`Value : ${payload[0].value.toFixed(2)}`}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
