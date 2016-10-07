import React from "react";
import { Link } from "react-router";
import { NavItem, Nav } from "react-bootstrap";
import Navbar, { Header, Brand, Toggle, Collapse } from "react-bootstrap/lib/Navbar";

export default class AppHeader extends React.Component {

  render() {
    return (
      <Navbar>
        <Header>
          <Brand>
            <Link to="/">Expense Tracker</Link>
          </Brand>

          <Toggle/>
        </Header>
        <Collapse>
          <Nav>
            <NavItem eventKey={1} href="#/">Logs</NavItem>
            <NavItem eventKey={2} href="#/summary">Summary</NavItem>
            <NavItem eventKey={3} href="#/savings">Savings</NavItem>
          </Nav>
        </Collapse>
      </Navbar>


    );
  }
}
