import PropTypes from "prop-types";
import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}
Entry.propTypes = {
  emoji: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Entry;
