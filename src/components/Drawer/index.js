import React from 'react';
import PropTypes from 'prop-types';
// components
import CartItem from '../CartItem';


const Drawer = ({ currentSum, cartItems = [], removeItem, onClose }) => {
  return (
    <div className="drawer">
      <div className="drawer__dimmer"></div>
      <div className="d-flex flex-column justify-between drawer__sidebar">

        <div>
          <div className="d-flex justify-between align-center mb-30 mt-30">
            <h2>Корзина</h2>
            <button onClick={onClose} className="d-flex justify-center align-center drawer__btn main-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0799 10.6155L9.6311 8.16673L12.0798 5.71801C13.0241 4.77376 11.5596 3.30934 10.6154 4.25359L8.16668 6.70231L5.71787 4.2535C4.77384 3.30947 3.30947 4.77384 4.2535 5.71787L6.70231 8.16668L4.25359 10.6154C3.30934 11.5596 4.77376 13.0241 5.71801 12.0798L8.16673 9.6311L10.6155 12.0799C11.5597 13.0241 13.0241 11.5597 12.0799 10.6155Z" fill="#B5B5B5"/>
              </svg>
            </button>
          </div>

          <div className="drawer__cards">
            {
              cartItems.map(item => (
              <CartItem
                key={item.id}
                title={item.title}
                price={item.price}
                imgSrc={item.imgSrc}
                removeItem={() => removeItem(item.id)}
              />
              ))
            }
          </div>
        </div>

        <ul className="drawer__order mb-30">
          <li className="mb-20 justify-between d-flex drawer__total">
            <span>Итого:</span>
            <div></div>
            <b>{ currentSum } руб.</b>
          </li>

          <li className="mb-25 justify-between d-flex drawer__tax">
            <span>Налог 5%:</span>
            <div></div>
            <b>{ Math.ceil(currentSum * 0.05) } руб.</b>
          </li>

          <li className="d-flex justify-center">
            <button className="drawer__actionBtn d-flex align-center justify-between action-btn">
              <span>Оформить заказ</span>
              <img src="/img/arrow.svg" alt="Arrow" />
            </button>
          </li>
        </ul>

      </div>
    </div>
  );
};

Drawer.propTypes = {
  currentSum: PropTypes.number.isRequired,
  cartItems: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Drawer;
