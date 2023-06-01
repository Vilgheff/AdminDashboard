import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const data = [
  {
    name: "18-24",
    uv: 31.47,
    fill: "#F3BA2F",
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#54C2C1",
  },
  {
    name: "30-34",
    uv: 15.69,
    pv: 1398,
    fill: "#0F0F3F",
  },
  {
    name: "35-39",
    uv: 8.22,
    pv: 9800,
    fill: "#9020E9",
  },
];

const style = {
  top: 0,
  left: 350,
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
      innerRadius={20}
      outerRadius={140}
      startAngle={90}
      endAngle={450}
      barSize={15}
      data={data}
    >
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "#fff" }}
        background
        clockWise
        dataKey="uv"
      />
      <Legend
        iconSize={10}
        iconType="circle"
        layout="vertical"
        wrapperStyle={style}
      />
    </RadialBarChart>
  );
};
