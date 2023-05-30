import { Pie } from "@ant-design/plots";
import styled from "styled-components";
const StyledCharts = styled(Pie)`
  width: 30%;
`
export const AntCharts = ({ data }) => {
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    label: {
      type: "outer",
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };
  return <StyledCharts {...config} />;
};
