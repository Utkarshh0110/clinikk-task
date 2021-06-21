import React, { useState } from "react";
import "./LineChart.css";
import { Line } from "react-chartjs-2";
const LineChart = () => {
  const [displayData, setDisplayData] = useState("weekly");

  const data = {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        label: "Study data",
        data: [0, 1.5, 2.5, 1, 4, 3, 2],
        borderColor: ["rgba(12, 11, 11, 1)"],
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          display: false,
          // scaleLabel: {
          //   display: true,
          //   labelString: 'Value'
          // },
          ticks: {
            min: 0,
            max: 6,
            stepSize: 1,
          },
        },
      ],
    },
  };

  return (
    <div className="linechart__container">
      <h1>Your statistics</h1>
      <div className="linechart__container--learning">
        <div className="linechart__container--dtls">
          <h2
            style={{
              color: "black",
            }}
          >
            Learning Hours
          </h2>
          <h2>My Courses</h2>
        </div>
        <div className="linechart__container--dropdown">
          <select
            value={displayData}
            className="linechart__container--select"
            onChange={(e) => setDisplayData(e.target.value)}
          >
            <option value="#"> ---Choose data--- </option>
            <option value="daily"> Daily </option>
            <option value="weekly"> Weekly </option>
            <option value="monthly"> Monthly </option>
            <option value="yearly"> Yearly </option>
          </select>
        </div>
      </div>
      <div className="linechart__container--chart">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default React.memo(LineChart);
