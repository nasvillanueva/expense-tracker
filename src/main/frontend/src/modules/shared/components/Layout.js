import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Simple React! Implementation",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div className="container">
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}