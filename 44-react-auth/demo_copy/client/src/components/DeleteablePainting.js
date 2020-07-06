import React from 'react';
import Painting from './Painting';
import DeleteConfirmation from './DeleteConfirmation';

class DeleteablePainting extends React.Component {
  constructor() {
    super();

    this.state = {
      deleteView: false
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState(prevState => ({
      deleteView: !prevState.deleteView
    }));
  }

  renderCard() {
    if (!this.state.deleteView) {
      return (
        <Painting
          painting={this.props.painting}
          handleVote={this.props.handleVote}
          handleToggle={this.handleToggle}
        />
      );
    } else {
      return (
        <DeleteConfirmation
          handleToggle={this.handleToggle}
          handleDelete={this.props.handleDelete}
          painting={this.props.painting}
        />
      );
    }
  }

  render() {
    return this.renderCard();
  }
}

export default DeleteablePainting;
