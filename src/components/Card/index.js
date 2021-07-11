import React from 'react';
import PropTypes from 'prop-types';
// styles
import './Card.scss';


const Card = ({ title, price, imgSrc, onClick }) => {
  return (
    <div className="card d-flex flex-column">
      <div className="card__favorite">
        <img src="/img/heart-unliked.svg" alt="Heart-unliked" />
      </div>
      
      <img src={ imgSrc } width={133} height={112} alt="Sneakers" />
      <p>{ title }</p>

      <div className="d-flex justify-between align-center">

        <div className="d-flex flex-column">
          <span className="text-uppercase card__tag">Цена:</span>
          <b className="card__price">{ price } руб.</b>
        </div>

        <button className="d-flex justify-center align-center card__btn main-btn" onClick={onClick}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
          </svg>
        </button>

      </div>
    </div>
  );
};


Card.propTypes = {
  title:   PropTypes.string.isRequired,
  price:   PropTypes.number.isRequired,
  imgSrc:  PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};


export default Card;