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


  useEffect(() => {
    // gettting items from DB
    axios.get(`${url}/items`)
      .then(res => setItems(res.data))
      .catch(err => console.error(err));

      // getting cart items from DB
      axios.get(`${url}/cart`)
      .then(res => setCartItems(res.data))
      .catch(err => console.error(err));

      // getting cart items from DB
      axios.get(`${url}/favorites`)
        .then(res => setFavoriteItems(res.data))
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
    axios.post(`${url}/cart`, item)
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
    axios.post(`${url}/favorites`, item)
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
          searchValue={searchValue} 
          onChangeSearchInput={onChangeSearchInput} 
          clearSearchInput={clearSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>

      <Route path="/favorites" exact>
        <Favorites
          items={favoriteItems}
          onAddToFavorite={onAddToFavorite}
          onRemoveFromFavorite={onRemoveFromFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>

    </div>
  );
}

export default App;
