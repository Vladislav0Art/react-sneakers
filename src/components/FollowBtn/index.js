import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// styles
import './FollowBtn.scss';
import AppContext from '../../contexts/AppContext';

const FollowBtn = ({ text, link, onClick }) => {
  const { theme } = React.useContext(AppContext);

  return (
    <Link className={`action-btn follow-btn ${theme}`} to={link} onClick={onClick}>
      <img width={16} height={16} src="img/arrow-left.svg" alt="Arrow" />
      <span>{ text }</span>
    </Link>
  );
};

FollowBtn.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  onClick:PropTypes.func
};

export default FollowBtn;
