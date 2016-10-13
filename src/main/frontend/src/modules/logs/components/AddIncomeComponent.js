import React from 'react';
import { FormGroup, FormControl, ControlLabel, DropdownButton, MenuItem } from 'react-bootstrap';

export default class AddLog extends React.Component {
  render() {
    return (
      <div className="addIncome">
        <header className="moduleTitle">
          <h3>Add Income</h3>
        </header>
        <FormGroup>
          <ControlLabel htmlFor="categoryId">
            Category<br/>
            <DropdownButton id="categoryId" title="Category">
              <MenuItem>Categories</MenuItem>
            </DropdownButton>
          </ControlLabel>
        </FormGroup>
      </div>
    );
  }
}