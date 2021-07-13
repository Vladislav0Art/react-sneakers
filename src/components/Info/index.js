import React from 'react';
import PropTypes from 'prop-types';
// scss modules
import styles from './Info.module.scss';


const Info = ({ image = {}, title = "", parag = "" }) => {

  const { url = "", width = 70, height = 70 } = image;

  return (
    <div className={styles.infoBlock}>
      { url.trim() !== "" && <img src={ url } width={width} height={height} alt="" /> }
      { title.trim() !== "" && <h2>{ title }</h2> }
      { parag.trim() && <p>{ parag }</p> }
    </div>
  );
};

Info.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  parag: PropTypes.string
};

export default Info;
