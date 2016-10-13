import React from 'react';
import { Button,
  Form, FormGroup,
  FormControl, ControlLabel,
  DropdownButton,
  MenuItem
} from 'react-bootstrap';

export default class AddLog extends React.Component {
  render() {
    return (
      <div className="addIncome">
        <header className="moduleTitle">
          <h3>Add Income</h3>
        </header>
        <Form>
          <ControlLabel htmlFor="valueId">
            Value <br/>
            <FormControl id="valueId" placeholder="Value" />
          </ControlLabel>
          <br/>
          <ControlLabel htmlFor="categoryId">
            Category <br/>
            <DropdownButton id="categoryId" title="Category">
              <MenuItem>Categories</MenuItem>
            </DropdownButton>
          </ControlLabel>
          <br/>
          <ControlLabel htmlFor="descriptionId">
            Description
            <FormControl id="descriptionId" placeholder="Description"/>
          </ControlLabel>
          <br/>
          <ControlLabel htmlFor="recurrenceId">
            Recurrence <br/>
            <DropdownButton id="recurrenceId" title="Recurrence">
              <MenuItem>Recurrence</MenuItem>
            </DropdownButton>
          </ControlLabel>
          <br/>
          <Button bsStyle="default" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}