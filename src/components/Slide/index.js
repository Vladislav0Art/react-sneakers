import React from 'react';
import PropTypes from 'prop-types';
// styles
import styles from './Slide.module.scss';


const Slide = ({ src }) => {
  return (
    <div className={styles.slide}>
      <img src={src} alt="Slide" />
    </div>
  );
};

Slide.propTypes = {
  src: PropTypes.string.isRequired
};

export default Slide;
