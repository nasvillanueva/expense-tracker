import React from 'react';
import { Button,
  Form, FormGroup,
  FormControl, ControlLabel,
  DropdownButton,
  MenuItem
} from 'react-bootstrap';

export default class AddSavingsLog extends React.Component {
  render() {
    return (
      <div className="addSavings">
        <header className="moduleTitle">
          <h3>Savings</h3>
        </header>
        <Form>
          <ControlLabel htmlFor="valueId">
            Value <br/>
            <FormControl id="valueId" placeholder="Value must be a number" type="number"/>
          </ControlLabel>
          <br/><br/>
          <ControlLabel htmlFor="categoryId">
            Category <br/>
            <FormControl id="valueId" placeholder="Savings" type="number" disabled/>
          </ControlLabel>
          <br/><br/>
          <ControlLabel htmlFor="descriptionId">
            Description
            <FormControl id="descriptionId" placeholder="Description"/>
          </ControlLabel>
          <br/><br/>
          <ControlLabel htmlFor="recurrenceId">
            Recurrence <br/>
            <DropdownButton id="recurrenceId" title="Recurrence">
              <MenuItem>Recurrence</MenuItem>
            </DropdownButton>
          </ControlLabel>
          <br/>
          <Button bsStyle="default" type="submit">
            Save
          </Button>
        </Form>
      </div>
    );
  }
}