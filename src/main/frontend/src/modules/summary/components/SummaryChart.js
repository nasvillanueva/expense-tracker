import React from "react";
import { Line, Bar, Doughnut } from "react-chartjs";

export default class SummaryEntry extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let summary = this.props.summary;

    var data = {
      labels:  [
        "Income",
        "Expense",
        "Savings"
      ],
      datasets: [
        {
          data: [
            12000,
            215,
            2000
          ],
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
        <Bar data={data}  />
    );
  }
}
