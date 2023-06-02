import { AntCharts, AntRadialBarChart, LineCharts, PosAndNevChart, ReRadialBarChart } from "Components/AntCharts";
import { NewHelMet } from "Components/Helmet";
const data = [
  {
    type: "分类一",
    value: 27,
  },
  {
    type: "分类二",
    value: 25,
  },
  {
    type: "分类三",
    value: 18,
  },
  {
    type: "分类四",
    value: 15,
  },
  {
    type: "分类五",
    value: 10,
  },
  {
    type: "其他",
    value: 5,
  },
];

export const Home = () => {
  return (
    <>
      <NewHelMet title="Home"></NewHelMet>
      <div className="top-content-charts">
        <ReRadialBarChart></ReRadialBarChart>
        <PosAndNevChart></PosAndNevChart>
      </div>
      <div className="bot-content-charts">
        <LineCharts></LineCharts>
      </div>
    </>
  );
};
