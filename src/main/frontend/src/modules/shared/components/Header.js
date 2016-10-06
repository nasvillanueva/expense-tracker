import React from "react";

import ModuleTitle from "./header/ModuleTitle";
import AppTitle from "./header/AppTitle";

export default class Header extends React.Component {

  render() {
    return (
      <header>
        <AppTitle />
        <ModuleTitle />
      </header>
    );
  }
}
