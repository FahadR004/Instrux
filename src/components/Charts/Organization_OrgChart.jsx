import { Chart } from "react-google-charts";

const OrgChart = ({data}) => {

  const options = {
    allowHtml: true,
    size: "medium",
  };

  return (
    <Chart
      chartType="OrgChart"
      data={data}
      options={options}
    />
  );
};

export default OrgChart;
