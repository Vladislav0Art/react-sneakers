import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// components
import Order from '../components/Order';
// config
import { baseUrl } from '../config/config';



const Orders = () => {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);


  // getting orders from db
  React.useEffect(() => {
    setIsLoading(true);

    axios.get(`${baseUrl}/orders`)
      .then(({ data }) => {
        setOrders(data);
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  }, []);


  // deleting order from db
  const deleteOrderById = (id) => {
    axios.delete(`${baseUrl}/orders/${id}`)
      .then(() => setOrders(() => orders.filter(order => order.id !== id)))
      .catch(err => console.error(err));
  }; 


  return (
    <section className="content p-40">
      <h1 className="content__title mb-40">Мои заказы</h1>
      <div className="orders">
        {
          !isLoading ? 
            orders.length > 0 ?
              orders.map(({ id, items }) => (
                <Order 
                  key={id} 
                  id={id} 
                  items={items}
                  deleteOrder={() => deleteOrderById(id)}
                />
              ))
            :
              <p>Пока у Вас нет заказов.</p>
          :
            <p>Ищем Ваши заказы...</p>
        }
      </div>
    </section>
  );
};

Orders.propTypes = {};

export default Orders;
