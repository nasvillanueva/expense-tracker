import React from 'react';
import {Panel, Button, Modal} from 'react-bootstrap';
import {Link} from 'react-router';
import FontAwesome from 'react-fontawesome';

export default class LogEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  close() {
    this.setState({showModal: false});
  }

  open() {
    this.setState({showModal: true});
  }

  render() {
    let entry = this.props.entry;

    return (
      <div className="logs">
        <Panel header={entry.value.toString()} bsStyle="default">
          {entry.category.toString()} &middot; {entry.desc.toString()}
          <div className="panelButtons">
            <Link>
              <Button className="deleteButton" bsSize="small">
                <FontAwesome name="times"/>
              </Button>
            </Link>
            <Link to="/add/income">
              <Button className="editButton" bsSize="small">
                <FontAwesome name="pencil-square-o"/>
              </Button>
            </Link>
          </div>
        </Panel>

        <Button className="addButton" bsStyle="default" bsSize="large" onClick={this.open.bind(this)}>
          <a>+</a>
        </Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Log</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul className="addCategory">
              <Link to="/add/income">
                <li className="income">
                  <FontAwesome name="money"/> Income
                </li>
              </Link>
              <Link to="/add/expense">
                <li className="expense">
                  <FontAwesome name="shopping-cart"/> Expense
                </li>
              </Link>
              <Link to="/add/savings">
                <li className="savings">
                  <FontAwesome name="credit-card"/> Savings
                </li>
              </Link>
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

LogEntry.propTypes = {
  entry: React.PropTypes.object
};