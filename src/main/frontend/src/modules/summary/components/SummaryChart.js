import React from "react";
import { Line, Bar, Pie } from "react-chartjs";

export default class SummaryEntry extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let label = this.props.label;
    let data = this.props.data;

    let chartData = {
      labels:  label,
      datasets: [
        {
          data: data,
          backgroundColor: [
            'rgba(0,0,0,1)',
            'rgba(255,255,255,1)',
            'rgba(255,255,255,1)'
          ],
          hoverBackgroundColor: [
            "#BEE3DB",
            "#5DFDCB",
            "#FFD6BA"
          ]
        }
      ]
    };

    return (
      <div className="charts">
        <Bar data={chartData} />
        <Line data={chartData} />
        <Pie data={chartData} />
      </div>
    );
  }
}
