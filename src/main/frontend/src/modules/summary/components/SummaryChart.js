import React from "react";
import { Line, Bar, Doughnut } from "react-chartjs";

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
            "#BEE3DB",
            "#5DFDCB",
            "#FFD6BA"
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
        <Bar data={chartData}  />
    );
  }
}
