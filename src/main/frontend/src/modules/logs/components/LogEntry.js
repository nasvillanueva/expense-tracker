import React from 'react';
import { Panel } from 'react-bootstrap';

export default class LogEntry extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let entry = this.props.entry;

    return (
      <Panel footer={entry.desc} bsStyle="primary">
        {entry.value}
      </Panel>
    )
  }
}

LogEntry.propTypes = {
  entry: React.PropTypes.object
};