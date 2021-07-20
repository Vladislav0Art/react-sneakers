import React from 'react';
import PropTypes from 'prop-types';
// components
import CardContainer from '../CardContainer';
import Card from '../Card';
// contexts
import AppContext from '../../contexts/AppContext';


const Order = ({
  id, 
  items,
  deleteOrder
}) => {
  const { theme } = React.useContext(AppContext);

  return (
    <div>
      <h2 className="d-flex">
        <span className="mr-30">Заказ #{ id }</span>
        <button title={`Удалить заказ #${ id }`} onClick={deleteOrder} className={`d-flex justify-center align-center drawer__btn main-btn ${theme}`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0799 10.6155L9.6311 8.16673L12.0798 5.71801C13.0241 4.77376 11.5596 3.30934 10.6154 4.25359L8.16668 6.70231L5.71787 4.2535C4.77384 3.30947 3.30947 4.77384 4.2535 5.71787L6.70231 8.16668L4.25359 10.6154C3.30934 11.5596 4.77376 13.0241 5.71801 12.0798L8.16673 9.6311L10.6155 12.0799C11.5597 13.0241 13.0241 11.5597 12.0799 10.6155Z" fill="#B5B5B5"/>
          </svg>
        </button>
      </h2>

      <CardContainer>
        {
          items.map(item => (
            <Card
              id={item.id}
              key={item.id}
              title={item.title}
              price={item.price} 
              imgSrc={item.imgSrc}

              isAddingToCartDisabled={true}
              isAddingToFavoriteDisabled={true}
              
              addToFavorite={() => {}}
              removeFromFavorite={() => {}}
              addToCart={() => {}}
              removeFromCart={() => {}}
            />
          ))
        }
      </CardContainer>
    </div>
  );
};

Order.propTypes = {
  id: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  deleteOrder: PropTypes.func.isRequired
};

export default Order;
