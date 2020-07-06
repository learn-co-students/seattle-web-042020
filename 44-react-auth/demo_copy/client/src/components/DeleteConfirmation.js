import React from 'react';

const DeleteConfirmation = ({ painting, handleToggle, handleDelete }) => {
  return (
    <div className="item">
      <div className="ui small image">
        <img src={painting.image} alt={painting.slug} />
      </div>
      <div className="middle aligned content">
        <div className="header">
          Are you sure u want to delete {`"${painting.title}"`}??
        </div>
        <div className="extra">
          <div className="ui buttons">
            <div
              onClick={() => handleDelete(painting.id)}
              className="ui button basic red"
            >
              <i className="trash icon" />
              Delete
            </div>
            <div onClick={handleToggle} className="ui button basic green">
              Keep
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
