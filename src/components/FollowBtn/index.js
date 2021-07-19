import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// styles
import './FollowBtn.scss';

const FollowBtn = ({ text, link, onClick }) => {
  return (
    <Link className="action-btn follow-btn" to={link} onClick={onClick}>
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
