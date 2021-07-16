import React from 'react';
import PropTypes from 'prop-types';
// components
import CardLoadingSkeleton from '../CardLoadingSkeleton';
// styles
import './Card.scss';
// contexts
import AppContext from '../../contexts/AppContext';


const Card = ({
  id,
  title, 
  price, 
  imgSrc,
  isLoading = false,
  
  addToFavorite,
  removeFromFavorite,
  addToCart,
  removeFromCart
}) => {
  const { isItemAdded, isItemFavorite } = React.useContext(AppContext);

  return (
    <div className="card d-flex flex-column">

      {
        isLoading && <CardLoadingSkeleton />
      }

      {
        !isLoading && 
        <React.Fragment>
          <div className="card__favorite">
            {
              !isItemFavorite(id) ?
                <img className="cu-p" src="/img/heart-unliked.svg" alt="Heart-unliked" onClick={addToFavorite} />
              :
                <img className="cu-p" src="/img/heart-liked.svg" alt="Heart-liked" onClick={removeFromFavorite} />
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
              !isItemAdded(id) ?
                <img
                  onClick={addToCart}
                  className="plus-btn"
                  width={32} 
                  height={32}
                  src="/img/button-unchecked.svg" 
                  alt="Plus"
                />
              :
                <img
                  onClick={removeFromCart}
                  className="check-btn cu-p"
                  width={32} 
                  height={32}
                  src="/img/button-checked.svg" 
                  alt="Checked"
                />
            }

          </div>
        </React.Fragment>
      }
    </div>
  );
};


Card.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,

  addToFavorite: PropTypes.func.isRequired,
  removeFromFavorite: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
};


export default Card;
