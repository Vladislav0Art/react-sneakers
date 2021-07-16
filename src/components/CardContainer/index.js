import React from 'react';
import PropTypes from 'prop-types';


const CardContainer = ({ children }) => {
  return (
    <div className="content__cards">
      { children }
    </div>
  );
};

CardContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default CardContainer;
