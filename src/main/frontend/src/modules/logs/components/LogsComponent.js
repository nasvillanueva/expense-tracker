import React from 'react';
import LogEntry from './LogEntry';

export default class LogsComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.updateEntries();
  }

  updateEntries() {
    this.props.fetchData();
  }

  render() {
    let store = this.props.logs;
    return (
      <div>
        <header className="moduleTitle">
          <h3>Logs</h3>
        </header>
        {store.entries.map((o, i) => <LogEntry entry={o} key={i}/>)}
      </div>
    )
  }
}

LogsComponent.propTypes = {
  fetchData: React.PropTypes.func,
  logs: React.PropTypes.object
};