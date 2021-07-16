import React from 'react';
import PropTypes from 'prop-types';
// components
import Card from '../components/Card'; 
import CardContainer from '../components/CardContainer';


const Favorites = ({ 
  items = [],
  cartItems = [],
  onAddToFavorite, 
  onRemoveFromFavorite, 
  onAddToCart
}) => {

  return (
    <section className="content p-40">
      <h1 className="content__title mb-40">Избранное</h1>
      
      <CardContainer>
        { 
          items.length ?
              items
                .map(item => (
                  <Card
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    imgSrc={item.imgSrc}
                    isCardFavorite={true}
                    isCardAdded={cartItems.some(cartItem => cartItem.itemId === item.itemId)}

                    addCardToFavorite={() => onAddToFavorite(item)}
                    removeFromFavorite={() => onRemoveFromFavorite(item.id)}
                    addCard={() => onAddToCart(item)}
                  />
              ))
            :
            <p>Пока у Вас нет избранных товаров</p>
          }
      </CardContainer>

    </section>
  );
};

Favorites.propTypes = {
  items: PropTypes.array.isRequired,
  cartItems: PropTypes.array.isRequired,
  onAddToFavorite: PropTypes.func.isRequired,
  onRemoveFromFavorite: PropTypes.func,
  onAddToCart: PropTypes.func.isRequired
};

export default Favorites;
