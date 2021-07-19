import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
// components
import CartItem from "../CartItem";
import Info from "../Info";
// contexts
import AppContext from "../../contexts/AppContext";
// config
import { baseUrl } from "../../config/config";



const Drawer = ({ currentSum, removeItem, onClose }) => {
  const { cartItems, setCartItems } = React.useContext(AppContext);

  const [orderId, setOrderId] = React.useState(null);
  const [isOrderCreated, setIsOrderCreated] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);


  const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));


  const onClickOrder = () => {
    setIsLoading(true);
    
    axios.post(`${baseUrl}/orders`, {
      items: cartItems
    })
      .then(async ({ data }) => {
        setOrderId(data.id);
        setIsOrderCreated(true);
        setCartItems([]);

        // deleting all cart items from mockup db
        for(let i = 0; i < data.items.length; i++) {
          try {
            const item = data.items[i];
            await axios.delete(`${baseUrl}/cart/${item.id}`);
            await delay(1000);
          }
          catch(err) {
            console.error(err);
          }
        }
      })
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false));
  };

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
              (cartItems.length > 0 && !isOrderCreated) &&
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

        {
          (cartItems.length > 0 && !isOrderCreated) && 
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
              <button disabled={isLoading} onClick={onClickOrder} className="drawer__actionBtn action-btn">
                <span>Оформить заказ</span>
                <img src="img/arrow-right.svg" alt="Arrow Right" />
              </button>
            </li>
          </ul>
        }

        {
          (cartItems.length <= 0 && !isOrderCreated) &&
          <Info
            image={{
              url: "img/empty-box.svg",
              width: 120,
              height: 120
            }}
            title="Корзина пустая"
            parag="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            btn={{
              link: "/react-sneakers/",
              text: "Вернуться на главную",
              onClick: onClose
            }}
          />
        }

        {
          isOrderCreated &&
          <Info
            image={{
              url: "img/order-created.svg",
              width: 83,
              height: 120
            }}
            title="Заказ оформлен!"
            parag={`Ваш заказ #${orderId} скоро будет передан курьерской доставке.`}
            btn={{
              link: "/react-sneakers/",
              text: "Вернуться на главную",
              onClick: onClose
            }}
          />
        }

      </div>
    </div>
  );
};

Drawer.propTypes = {
  currentSum: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Drawer;
