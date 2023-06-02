import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const data = [
  {
    name: "check",
    uv: 100,
    fill: "transparent",
    display: "none",
  },
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
  width: "30%",
  position: "center",
  lineHeight: "24px",
  display: "flex",
};

export const ReRadialBarChart = () => {
  return (
    <>
      <h1>Money Allocation</h1>
      <RadialBarChart
        width={400}
        height={400}
        cx={200}
        cy={200}
        innerRadius={20}
        outerRadius={180}
        startAngle={90}
        endAngle={450}
        barSize={15}
        data={data}
      >
        <RadialBar minAngle={15} background dataKey="uv" />
        <Legend
          iconSize={10}
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          wrapperStyle={style}
          
        />
      </RadialBarChart>
    </>
  );
};
