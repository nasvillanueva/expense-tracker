import React from "react";
import LogEntry from "./LogEntry";
import LogsService from "../services/LogsService";
import {Button} from "react-bootstrap";
import BindFunctions from "modules/shared/util/BindFunctions";
import LogsForm from './LogForm'

export default class LogsComponent extends React.Component {
  constructor(props) {
    super(props);
    BindFunctions.call(this, ['handleSubmit', 'prepareUpdateForm', 'deleteEntry', 'prepareAddForm'])
  }

  componentWillMount() {
    this.updateEntries();
  }

  updateEntries() {
    this.props.fetchData();
  }

  handleSubmit(e) {
    e.preventDefault();
    let store = this.props.logs;
    let fields = store.get("fields").toJS();
    let isUpdate = typeof fields.id !== 'undefined' || fields.id != null;
    LogsService.submitEntry(isUpdate, fields)
      .then(resp => {
        this.props.clearFields();
        this.props.updateModalState(false);
        this.updateEntries();
      }).catch(err => {
      console.log(err)
    })
  }

  prepareUpdateForm(id){
    LogsService.getEntry(id)
      .then(resp => {
        this.props.initUpdateForm(resp.data);
        this.props.updateModalState(true);
      }).catch(err => {
      console.log(err);
      this.props.clearFields();
    })
  }

  prepareAddForm(modalState){
    this.props.clearFields();
    this.props.updateModalState(modalState);
  }

  deleteEntry(id){
    LogsService.deleteEntry(id)
      .then(resp => {
        this.props.clearFields();
        this.updateEntries();
      })
  }

  render() {
    let store = this.props.logs;
    let entries = store.get("entries");
    let ui = store.get("ui");
    let showModal = ui.get("showModal");
    return (
      <div>
        <header className="moduleTitle">
          <h3>Logs</h3>
        </header>
        {entries.map((o, i) => <LogEntry entry={o} key={i} delete={this.deleteEntry} openModal={this.prepareUpdateForm}/>)}
        <LogsForm store={store.toJS()} updateField={this.props.updateField}
                  closeHandler={() => this.props.updateModalState(false)} handleSubmit={this.handleSubmit}/>
        <Button className="addButton" bsStyle="default" bsSize="large"
                onClick={() => this.prepareAddForm(true)}>
          <a>+</a>
        </Button>
      </div>
    )
  }
}

LogsComponent.propTypes = {
  fetchData: React.PropTypes.func,
  logs: React.PropTypes.object
};