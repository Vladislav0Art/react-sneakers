import React from 'react';
import PropTypes from 'prop-types';


const CardContainer = ({ children }) => {
  return (
    <div className="content__cards d-flex flex-wrap justify-between">
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
