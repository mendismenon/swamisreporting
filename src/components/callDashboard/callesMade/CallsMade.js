import DataTable from "react-data-table-component";
import "./CallsMade.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { COLD_REQUIREMENT, HOT_REQUIREMENT } from "../../../utill/constants";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const CallsMade = (props) => {
    const ChartOptions = {
        plugins: {
          title: {
            display: true,
            text: 'Requirement Analysis',
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      };
  const recordColumns = [
    {
      name: "Sales Manager",
      selector: (row) => row.name_of_sales_manager,
    },
    {
      name: "Hot Count",
      selector: (row) => (row.hotCount ? row.hotCount : 0),
    },
    {
      name: "Cold Count",
      selector: (row) => (row.coldCount ? row.coldCount : 0),
    },
    {
      name: "Record Count",
      selector: (row) => row.recordCount,
    },
  ];
  const chartData = {
    labels: props.callData.salesManagerArr,
    datasets: [
      {
        label: HOT_REQUIREMENT,
        data: props.callData.requirementArr.map((lobj) => lobj.hotCount),
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: COLD_REQUIREMENT,
        data: props.callData.requirementArr.map((lobj) => lobj.coldCount),
        backgroundColor: 'rgb(75, 192, 192)',
      }
    ],
  };
  return (
    <div className="dispFlex">
      <div className="width45">
        <DataTable columns={recordColumns} data={props.callData.requirementArr} />
      </div>
      <div className="width10"></div>
      <div className="width45">
        <Bar options={ChartOptions} data={chartData} />
      </div>
    </div>
  );
};
export default CallsMade;
