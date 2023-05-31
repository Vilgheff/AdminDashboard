import { AntCharts, LineCharts } from "Components/AntCharts";
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
const data2 = [
  {
    type: "dsagagfa",
    value: 27,
  },
  {
    type: "dhsgsh",
    value: 25,
  },
  {
    type: "kjygkf",
    value: 18,
  },
  {
    type: "hdgkhjd",
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
const data3 = [
  {
    type: "分类一",
    value: 27,
  },
  {
    type: "fdgsdhfds二",
    value: 25,
  },
  {
    type: "分类三",
    value: 18,
  },
  {
    type: "aghshn四",
    value: 15,
  },
  {
    type: "gafnbfsb五",
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
        <AntCharts data={data}></AntCharts>
        <AntCharts data={data2}></AntCharts>
        <AntCharts data={data3}></AntCharts>
      </div>
      <div className="bot-content-charts">
        <LineCharts></LineCharts>
      </div>
    </>
  );
};
