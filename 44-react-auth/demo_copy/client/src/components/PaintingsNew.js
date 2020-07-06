import React, { Component } from 'react';

class PaintingsNew extends Component {
  render() {
    return (
      <form className="ui form">
        <div className="field">
          <label>Title</label>
          <input type="text" name="title" placeholder="Title" />
        </div>
        <button className="ui big green basic button" type="submit">
          Add Painting
        </button>
      </form>
    );
  }
}

export default PaintingsNew;
