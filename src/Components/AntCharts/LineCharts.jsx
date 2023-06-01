import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

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
    <>
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
        <CartesianGrid vertical={false} />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="name"
          tickMargin={20}
        />
        <YAxis axisLine={false} tickLine={false} tickMargin={20} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="red"
          strokeWidth={3}
          activeDot={{ r: 3 }}
          dot={false}
        />
      </LineChart>
    </>
  );
};
