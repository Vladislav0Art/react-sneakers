import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
// slider styles
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// styles
import './CustomSlider.scss';
import AppContext from '../../contexts/AppContext';


const CustomSlider = ({ children, settings = {} }) => {
  const { theme } = React.useContext(AppContext);

  return (
    <div className={`slider-container ${theme}`}>
      <Slider {...settings}>
        { children }
      </Slider>
    </div>
  );
};


CustomSlider.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]).isRequired,
  settings: PropTypes.object
};

export default CustomSlider;
