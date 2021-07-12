import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
// components 
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
// config
import { baseUrl as url } from './config/config';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const [isCartOpened, setIsCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [currentSum, setCurrentSum] = useState(0);

  // gettting items from DB
  useEffect(() => {
    axios.get(`${url}/items`)
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);


  // getting cart items from DB
  useEffect(() => {
    axios.get(`${url}/cart`)
      .then(res => setCartItems(res.data))
      .catch(err => console.error(err));
  }, []);


  // counting total sum
  useEffect(() => {
    let total = 0;
    cartItems.forEach(item => total += item.price);

    setCurrentSum(total);

  }, [cartItems]);

  // adding card to cart
  const onAddToCart = (item) => {
    const newItem = {
      ...item,
      itemId: item.id
    };

    axios.post(`${url}/cart`, newItem)
      .catch(err => console.error(err));

    setCartItems(prevState => ([
      ...prevState,
      newItem
    ]));
  };


  // deleting card from cart 
  const onRemoveFromCart = (dataBaseId, id) => {
    axios.delete(`${url}/cart/${dataBaseId}`)
    .catch(err => console.error(err));

    setCartItems(prevState => prevState.filter(stateItem => stateItem.id !== id));
  };


  // adding card to favorite
  const onAddToFavorite = (item) => {
    axios.post(`${url}/favorite`, item)
      .then(res => console.log(res.data));
  };


  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const clearSearchInput = () => {
    setSearchValue('');
  };


  // setting index + 1 as id of cart item because mockapi is a piece of shit 
  const getCartId = (id) => {
    let desiredId = null;

    cartItems.forEach((item) => {
      if(item.itemId === id) {
        desiredId = item._id;
      }
    });

    return desiredId;
  };


  return (
    <div className="wrapper clear">
      { isCartOpened && 
        <Drawer
          currentSum={currentSum}
          cartItems={cartItems}
          removeItem={onRemoveFromCart}
          getCartId={getCartId}
          onClose={() => setIsCartOpened(false)}
        /> 
      }
      
      <Header
        currentSum={currentSum} 
        onClickCart={() => setIsCartOpened(true)}
      />

      <section className="content p-40">
        <div className="mb-40 d-flex justify-between align-center">
          <h1 className="content__title">{(searchValue === "") ? "Все кросовки" : `Поиск по запросу: "${searchValue}"`}</h1>
          <div className="d-flex align-center content__search">
            <img className="mr-15" src="/img/search.svg" alt="Search icon" />
            <input value={searchValue} onChange={onChangeSearchInput} type="text" placeholder="Поиск..." />
            
            { searchValue !== '' && <img onClick={clearSearchInput} className="cu-p" src="/img/cross.svg" alt="Clear" /> }
          </div>
        </div>

        <div className="content__cards d-flex flex-wrap justify-between">

          {
            items
              .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map(item => (
              <Card
                id={item.id}
                key={item.id}
                title={item.title}
                price={item.price}
                imgSrc={item.imgSrc}

                addCardToFavorite={() => onAddToFavorite(item)}
                removeCardFromFavorite={() => console.log('added to favorite')}
                addCard={() => onAddToCart(item)}
              />
            ))
          }

        </div>
      </section>
    </div>
  );
}

export default App;
