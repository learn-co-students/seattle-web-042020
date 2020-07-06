import React from 'react';
import { Link } from 'react-router-dom';

const Painting = props => {
  return (
    <div className="item">
      <div className="ui small image">
        <img src={props.painting.image} alt={props.painting.slug} />
      </div>
      <div className="middle aligned content">
        <div className="header">{`"${props.painting.title}" by ${props.painting
          .artist.name}`}</div>
        <div className="description">
          <a
            onClick={() => {
              props.handleVote(props.painting.id);
            }}
          >
            <i className="large caret up icon" />
            {props.painting.votes} votes
          </a>
        </div>
        <div className="extra">
          <div className="ui big buttons">
            <Link
              to={`/paintings/${props.painting.slug}`}
              className="ui basic blue button"
            >
              <i className="add circle icon" />
              More Info
            </Link>
            <div onClick={props.handleToggle} className="ui button basic red">
              <i className="trash icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Painting;
