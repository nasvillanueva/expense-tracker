import React from 'react';
import { Panel, Button } from 'react-bootstrap';

export default class LogEntry extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let entry = this.props.entry;

    return (
      <div className="logs">
        <Panel header={entry.value.toString()} bsStyle="default">
          {entry.category.toString()} | {entry.desc.toString()}
        </Panel>
        <Button bsStyle="default" bsSize="large">
          <a>+</a>
        </Button>
      </div>
    )
  }
}

LogEntry.propTypes = {
  entry: React.PropTypes.object
};