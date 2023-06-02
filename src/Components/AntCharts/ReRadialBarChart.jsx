import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const data = [
  {
    name: "Bank",
    uv: 31.47,
    fill: "#F3BA2F",
  },
  {
    name: "Token",
    uv: 26.69,
    pv: 4567,
    fill: "#54C2C1",
  },
  {
    name: "Cash",
    uv: 15.69,
    pv: 1398,
    fill: "#0F0F3F",
  },
  {
    name: "Stock",
    uv: 8.22,
    pv: 9800,
    fill: "#9020E9",
  },
];

const style = {
  width: "100%",
  position: "unset",
  lineHeight: "24px",
  display: "flex",
  justifyContent: "center"
};

export const ReRadialBarChart = () => {
  return (
    <RadialBarChart
      width={300}
      height={300}
      cx={150}
      cy={150}
      innerRadius={30}
      outerRadius={140}
      startAngle={90}
      endAngle={450}
      barSize={15}
      data={data}
    >
      <RadialBar
        minAngle={15}
        background
        clockWise
        dataKey="uv"
      />
      <Legend
        iconSize={10}
        iconType="circle"
        layout="horizontal"
        verticalAlign="bottom"
        wrapperStyle={style}
      />
      
    </RadialBarChart>
  );
};
