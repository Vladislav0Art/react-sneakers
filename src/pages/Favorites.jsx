import React from 'react';
import PropTypes from 'prop-types';
// components
import Card from '../components/Card'; 
import CardContainer from '../components/CardContainer';
// contexts
import AppContext from '../contexts/AppContext';


const Favorites = ({
  onAddToFavorite, 
  onRemoveFromFavorite, 
  onAddToCart,
  onRemoveFromCart
}) => {
  const { favoriteItems, cartItems } = React.useContext(AppContext);

  const getIdOfItemInCart = (id) => {
    const item = cartItems.find(favItem => Number(favItem.itemId) === Number(id));
    return item.id;
  };

  return (
    <section className="content p-40">
      <h1 className="content__title mb-40">Избранное</h1>
      
      <CardContainer>
        { 
          favoriteItems.length ?
            favoriteItems
              .map(item => (
                <Card
                  id={item.itemId}
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  imgSrc={item.imgSrc}

                  addToFavorite={() => onAddToFavorite(item)}
                  removeFromFavorite={() => onRemoveFromFavorite(item.id)}
                  addToCart={() => onAddToCart(item)}
                  removeFromCart={() => onRemoveFromCart(getIdOfItemInCart(item.itemId))}
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
  onAddToFavorite: PropTypes.func.isRequired,
  onRemoveFromFavorite: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired
};

export default Favorites;
