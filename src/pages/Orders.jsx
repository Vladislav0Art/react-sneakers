import React from 'react';
import axios from 'axios';
// components
import Order from '../components/Order';
import Info from '../components/Info';
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
            <Info
              image={{
                url: "img/sad-emoji.svg",
                width: 80,
                height: 80
              }}
              title="У Вас нет заказов :("
              parag="Вернитесь на главную страницу и сделайте свой первый заказ!"
              btn={{
                link: "/react-sneakers/",
                text: "Вернуться на главную"
              }}
            />
          :
          <Info
            image={{
              url: "img/search.svg",
              width: 70,
              height: 70
            }}
            title="Вы ищем Ваши заказы в базе данных"
            parag="Пожалуйста, подождите..."
          />
        }
      </div>
    </section>
  );
};


export default Orders;
