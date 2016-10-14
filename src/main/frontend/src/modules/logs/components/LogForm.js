import React from 'react';
import {Button, Form, FormGroup, Modal, FormControl, ControlLabel} from "react-bootstrap";
import BindFunctions from "modules/shared/util/BindFunctions";

export default class LogForm extends React.Component {
  constructor(props) {
    super(props);
    BindFunctions.call(this, ["updateField"]);
  }

  updateField(e) {
    this.props.updateField(e.target.name, e.target.value);
  }

  render() {

    let store = this.props.store;

    return (
      <Modal show={store.ui.showModal} onHide={this.props.closeHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Add Log</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="addEntry">
            <Form onSubmit={this.props.handleSubmit} id="entryForm">
              <input type="hidden" name="id" value={store.fields.id} />
              <FormGroup>
                <ControlLabel htmlFor="value">Value</ControlLabel>
                <FormControl id="value" name="value" required="required" onChange={this.updateField}
                             placeholder="Value must be a number" type="number" value={store.fields.value}/>
              </FormGroup>
              <FormGroup>
                <ControlLabel htmlFor="category">Category</ControlLabel>
                <select className="form-control" required="required" name="category"
                        id="category" onChange={this.updateField} value={store.fields.category}>
                  <option value="">Select One</option>
                  <option value="INCOME"><b>Income</b></option>
                  <option value="SAVINGS"><b>Savings</b></option>
                  <optgroup label="Expense">
                    <option value="FOOD">Food</option>
                    <option value="BILL">Bill</option>
                    <option value="TRANSPORT">Transport</option>
                    <option value="HEALTH">Health</option>
                    <option value="CLOTHES">Clothes</option>
                    <option value="LEISURE">Leisure</option>
                    <option value="EDUCATION">Education</option>
                    <option value="OTHER">Other</option>
                  </optgroup>
                </select>
              </FormGroup>
              <FormGroup>
                <ControlLabel htmlFor="description">Description</ControlLabel>
                <FormControl id="description" required="required" name="description"
                             placeholder="Description" onChange={this.updateField} value={store.fields.description}/>
              </FormGroup>
              <FormGroup>
                <ControlLabel htmlFor="recurrenceId">
                  Recurrence
                </ControlLabel>
                <select className="form-control" required="required" name="recurrence"
                        id="recurrence" onChange={this.updateField} value={store.fields.recurrence}>
                  <option value="NONE">None</option>
                  <option value="">Select One</option>
                  <option value="DAILY">Daily</option>
                  <option value="WEEKLY">Weekly</option>
                  <option value="FORTNIGHTLY">Fortnightly</option>
                  <option value="MONTHLY">Monthly</option>
                  <option value="QUARTERLY">Quarterly</option>
                  <option value="BIANNUALLY">Bi-Annually</option>
                  <option value="ANNUALLY">Annually</option>
                </select>
              </FormGroup>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" type="submit" form="entryForm">Save</Button>
          <Button onClick={this.props.closeHandler}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}