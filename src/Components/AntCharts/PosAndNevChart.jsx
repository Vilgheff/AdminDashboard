import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";
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
    name: "Page A",
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    pv: -9800,
    amt: 2290,
  },
  {
    name: "Page D",
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    pv: -3800,
    amt: 2500,
  },
  {
    name: "Page G",
    pv: 4300,
    amt: 2100,
  },
];
export const PosAndNevChart = () => {
  return (
    <>
      <h1>Profit</h1>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid opacity={1} />
        <XAxis
          tickLine={false}
          axisLine={{
            opacity: 0.3,
          }}
          dataKey="name"
          tickMargin={10}
          style={style}
        />
        <YAxis
          tickLine={false}
          tickMargin={10}
          axisLine={{
            opacity: 0.3,
          }}
          style={style}
        />
        <Tooltip />
        <Bar dataKey="pv" radius={[10, 10, 0, 0]}>
          {data.map((entry) => (
            <Cell fill={entry.pv < 0 ? "#F05D5E" : "#4FB5C9"} />
          ))}
        </Bar>
      </BarChart>
    </>
  );
};
