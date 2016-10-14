import React from "react";
import {Panel, Button} from "react-bootstrap";
import FontAwesome from "react-fontawesome";

export default class LogEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let entry = this.props.entry;

    return (
        <Panel className="logs" bsStyle="default">
          <div className="panelData">
            <h4>{entry.value.toString()}</h4>
            <p>{entry.category.toString()} &middot; {entry.desc.toString()}</p>
          </div>
          <div className="panelButtons">
            <Button className="deleteButton" bsSize="small" onClick={() => this.props.delete(entry.id)}>
              <FontAwesome name="times"/>
            </Button>
            <Button className="editButton" bsSize="small" onClick={() => this.props.openModal(entry.id)}>
              <FontAwesome name="pencil-square-o"/>
            </Button>
          </div>
        </Panel>
    )
  }
}

LogEntry.propTypes = {
  entry: React.PropTypes.object
};