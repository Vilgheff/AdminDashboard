import React from "react";
import styled from "styled-components";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const style = {
  color: "#A4A4B3",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "16px",
  flex: "none",
  order: "2",
  flexGrow: "0",
};
const data = [
  {
    name: "12:00",
    pv: 2400,
    amt: 2400,
  },
  {
    name: "1:00",
    pv: 1398,
    amt: 2210,
  },
  {
    name: "2:00",
    pv: 9800,
    amt: 2290,
  },
  {
    name: "3:00",
    pv: 3908,
    amt: 2000,
  },
  {
    name: "4:00",
    pv: 4800,
    amt: 2181,
  },
  {
    name: "5:00",
    pv: 3800,
    amt: 2500,
  },
  {
    name: "6:00",
    pv: 4300,
    amt: 2100,
  },
  {
    name: "7:00",
    pv: 4300,
    amt: 2100,
  },
  {
    name: "8:00",
    pv: 4300,
    amt: 2100,
  },
  {
    name: "9:00",
    pv: 4300,
    amt: 2100,
  },
  {
    name: "10:00",
    pv: 4300,
    amt: 2100,
  },
  {
    name: "11:00",
    pv: 4300,
    amt: 2100,
  },
];

export const LineCharts = () => {
  return (
    <StyledContainer>
      <h1> Token Price</h1>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="100%" y2="0">
            <stop offset="0%" stopColor="#9747FF" stopOpacity={1} />
            <stop offset="107.68%" stopColor="#14F4C9" stopOpacity={1} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="name"
          tickMargin={10}
          style={style}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickMargin={20}
          style={style}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="url(#colorUv)"
          strokeWidth={3.75}
          activeDot={{ r: 3 }}
          dot={false}
        />
      </LineChart>
    </StyledContainer>
  );
};
