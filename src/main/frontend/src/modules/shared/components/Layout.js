import React from "react";
import Footer from "./Footer";
import AppHeader from "./AppHeader";

export default class Layout extends React.Component {

  render() {
    return (
      <div>
        <AppHeader />
        <div className="container">
          <div className="main">
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}