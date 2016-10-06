import React from "react";

export default class Income extends React.Component {

  handleChange(){

  }
  handleSubmit(){

  }
  render () {
    return (
      <div>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="" className="control-label col-sm-2">Value</label>
            <div className="col-md-10">
              <input type="text" name="value" onChange={this.handleChange}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="" className="control-label col-sm-2">Description</label>
            <div className="col-md-10">
              <input type="text" name="description" onChange={this.handleChange}/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}