import React from 'react';
import PropTypes from 'prop-types';
// scss modules
import styles from './Info.module.scss';
// components
import FollowBtn from '../FollowBtn';
// contexts
import AppContext from '../../contexts/AppContext';


const Info = ({ image = {}, title = "", parag = "", btn = {} }) => {
  const { theme } = React.useContext(AppContext);


  const { url = "", width = 70, height = 70 } = image;
  const { text: btnText = "", link = null, onClick } = btn;

  return (
    <div className={styles.infoBlock + " " + (theme === 'light' ? styles.light : styles.dark)}>
      { url.trim() !== "" && <img src={ url } width={width} height={height} alt="" /> }
      { title.trim() !== "" && <h2>{ title }</h2> }
      { parag.trim() !== "" && <p>{ parag }</p> }
      { (btnText.trim() !== "" && link) && <FollowBtn text={btnText} link={link} onClick={onClick} /> }
    </div>
  );
};

Info.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  parag: PropTypes.string,
  btn: PropTypes.object
};

export default Info;
