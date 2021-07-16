import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
// components 
import Header from './components/Header';
import Drawer from './components/Drawer';
// pages
import Home from './pages/Home';
import Favorites from './pages/Favorites';
// config
import { baseUrl as url } from './config/config';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const [isCartOpened, setIsCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [currentSum, setCurrentSum] = useState(0);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const getItems = new Promise((resolve, reject) => (
      axios.get(`${url}/items`)
          .then(res => resolve(res.data))
          .catch(err => reject(err))
    ));

    const getCartItems = new Promise((resolve, reject) => (
      axios.get(`${url}/cart`)
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    ));

    const getFavoriteItems = new Promise((resolve, reject) => (
      axios.get(`${url}/favorites`)
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    ));

    Promise.all([getItems, getCartItems, getFavoriteItems])
      .then(values => {
        setFavoriteItems(values[2]);
        setCartItems(values[1]); 
        setItems(values[0]);
        setIsLoading(false);
      })
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
    const modifiedItem = item.hasOwnProperty('itemId') ? item : { ...item, itemId: item.id };

    axios.post(`${url}/cart`, modifiedItem)
      .then(res => setCartItems(prevState => ([
        ...prevState,
        res.data
      ])))
      .catch(err => console.error(err));
  };


  // deleting card from cart 
  const onRemoveFromCart = (id) => {
    axios.delete(`${url}/cart/${id}`)
      .then(() => setCartItems(prevState => prevState.filter(stateItem => stateItem.id !== id)))
      .catch(err => console.error(err));
  };


  // adding card to favorite
  const onAddToFavorite = (item) => {
    axios.post(`${url}/favorites`, {
      ...item,
      itemId: item.id
    })
      .then(res => setFavoriteItems(prev => [
        ...prev,
        res.data
      ]));
  };

  // deleting card from favorite
  const onRemoveFromFavorite = (id) => {
    axios.delete(`${url}/favorites/${id}`)
      .then(() => setFavoriteItems(prev => prev.filter(item => item.id !== id)))
      .catch(err => console.error(err));
  };


  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const clearSearchInput = () => {
    setSearchValue('');
  };


  return (
    <div className="wrapper clear">
      { isCartOpened && 
        <Drawer
          currentSum={currentSum}
          cartItems={cartItems}
          removeItem={onRemoveFromCart}
          onClose={() => setIsCartOpened(false)}
        />
      }
      
      <Header
        currentSum={currentSum}
        countOfLikedItems={favoriteItems.length} 
        onClickCart={() => setIsCartOpened(true)}
      />

      <Route path="/" exact>
        <Home
          items={items}
          cartItems={cartItems}
          favoriteItems={favoriteItems}
          searchValue={searchValue}
          isLoading={isLoading}
          onChangeSearchInput={onChangeSearchInput} 
          clearSearchInput={clearSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
          removeFromFavorite={onRemoveFromFavorite}
        />
      </Route>

      <Route path="/favorites" exact>
        <Favorites
          items={favoriteItems}
          cartItems={cartItems}
          onAddToFavorite={onAddToFavorite}
          onRemoveFromFavorite={onRemoveFromFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>

    </div>
  );
}

export default App;
