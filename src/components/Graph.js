import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label
} from 'recharts';
import CustomTooltip from './CustomTooltip';
import { connect } from 'react-redux';

const Graph = ({ chartData, isMobile }) => (
  <LineChart
    width={isMobile ? 350 : 500}
    height={isMobile ? 150 : 300}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="times">
      <Label
        value="Time"
        offset={-5}
        position="insideBottom"
        fontSize={isMobile ? 12 : 14}
      />
    </XAxis>
    <YAxis
      domain={[0, dataMax => Math.floor(dataMax) * 2]}
      label={{
        value: 'Values',
        angle: -90,
        position: 'insideLeft',
        fontSize: isMobile ? 12 : 14
      }}
    />
    <Tooltip content={CustomTooltip} />
    <Line
      type="monotone"
      dataKey="values"
      data={chartData.data}
      stroke={chartData.color}
    />
  </LineChart>
);

const mapStateToProps = state => ({
  isMobile: !state.browser.greaterThan.extraSmall
});

export default connect(mapStateToProps)(Graph);
