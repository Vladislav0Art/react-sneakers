import React from 'react';
import PropTypes from 'prop-types';
// styles
import './Card.scss';


const Card = ({
  title, 
  price, 
  imgSrc,
  isCardAdded = false,
  isCardFavorite = false,
  addCardToFavorite,
  removeFromFavorite,
  addCard
}) => {

  const [isAdded, setIsAdded] = React.useState(isCardAdded);
  const [isFavorite, setIsFavorite] = React.useState(isCardFavorite);


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
    removeFromFavorite && removeFromFavorite();
  };


  return (
    <div className="card d-flex flex-column">
      <div className="card__favorite">
        {
          !isFavorite ?
            <img className="cu-p" src="/img/heart-unliked.svg" alt="Heart-unliked" onClick={onClickUnlikedHeart} />
          :
            <img className="cu-p" src="/img/heart-liked.svg" alt="Heart-liked" onClick={onClickLikedHeart} />
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
  title:   PropTypes.string.isRequired,
  price:   PropTypes.number.isRequired,
  imgSrc:  PropTypes.string.isRequired,
  isCardAdded: PropTypes.bool,
  isCardFavorite: PropTypes.bool,

  addCardToFavorite: PropTypes.func.isRequired,
  removeFromFavorite: PropTypes.func,
  addCard: PropTypes.func.isRequired
};


export default Card;
