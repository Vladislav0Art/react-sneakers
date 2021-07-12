import React from 'react';
import PropTypes from 'prop-types';
// styles
import './Card.scss';


const Card = ({
  id,
  title, 
  price, 
  imgSrc,
  addCardToFavorite,
  removeCardFromFavorite,
  addCard
}) => {

  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);


  const onClickPlus = () => {
    setIsAdded(true);
    addCard();
  };

  const onClickUnlikedHeart = () => {
    setIsFavorite(true);
    addCardToFavorite();
  };

  const onClickLikedHeart = () => {
    setIsFavorite(false);
    removeCardFromFavorite();
  };

  return (
    <div className="card d-flex flex-column">
      <div className="card__favorite">
        {
          !isFavorite ?
            <img src="/img/heart-unliked.svg" alt="Heart-unliked" onClick={onClickUnlikedHeart} />
          :
            <img src="/img/heart-liked.svg" alt="Heart-liked" onClick={onClickLikedHeart} />
        }
        
      </div>
      
      <img src={ imgSrc } width={133} height={112} alt="Sneakers" />
      <p>{ title }</p>

      <div className="d-flex justify-between align-center">

        <div className="d-flex flex-column">
          <span className="text-uppercase card__tag">Цена:</span>
          <b className="card__price">{ price } руб.</b>
        </div>

        {
          !isAdded ?
            <img
              onClick={onClickPlus}
              className="plus-btn"
              width={32} 
              height={32}
              src="/img/button-unchecked.svg" 
              alt="Plus"
            />
          :
            <img
              className="check-btn"
              width={32} 
              height={32}
              src="/img/button-checked.svg" 
              alt="Checked"
            />
        }

      </div>
    </div>
  );
};


Card.propTypes = {
  id:      PropTypes.number.isRequired,
  title:   PropTypes.string.isRequired,
  price:   PropTypes.number.isRequired,
  imgSrc:  PropTypes.string.isRequired,

  addCardToFavorite: PropTypes.func.isRequired,
  removeCardFromFavorite: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired
};


export default Card;
