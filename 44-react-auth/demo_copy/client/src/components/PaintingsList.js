import React from "react";
import DeleteablePainting from "./DeleteablePainting";

const PaintingsList = ({ handleDelete, handleVote, paintings }) => {
  const items = paintings.map(pntg => (
    <DeleteablePainting
      key={pntg.id}
      painting={pntg}
      handleVote={handleVote}
      handleDelete={handleDelete}
    />
  ));
  return (
    <div>
      <h1>All Paintings</h1>
      <div className="ui unstackable items">{items}</div>
    </div>
  );
};

// #comment some stuff for practice

export default PaintingsList;
