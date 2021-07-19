import React from 'react';
import PropTypes from 'prop-types';
// components
import Card from '../components/Card';
import CardContainer from '../components/CardContainer';
// contexts
import AppContext from '../contexts/AppContext';


const Home = ({ 
  searchValue,
  isLoading, 
  onChangeSearchInput, 
  clearSearchInput,
  
  onAddToFavorite,
  onRemoveFromFavorite,
  
  onAddToCart,
  onRemoveFromCart
}) => {
  const { items, cartItems, favoriteItems } = React.useContext(AppContext);


  const getIdOfItemInFavorites = (id) => {
    const item = favoriteItems.find(favItem => Number(favItem.itemId) === Number(id));
    return item.id;
  };

  const getIdOfItemInCart = (id) => {
    const item = cartItems.find(favItem => Number(favItem.itemId) === Number(id));
    return item.id;
  };
  
  return (
    <section className="content p-40">
      <div className="mb-40 d-flex justify-between align-center content__top">
        <h1 className="content__title">{(searchValue === "") ? "Все кросовки" : `Поиск по запросу: "${searchValue}"`}</h1>
        <div className="d-flex align-center content__search">
          <img className="mr-15" src="img/search.svg" alt="Search icon" />
          <input value={ searchValue } onChange={onChangeSearchInput} type="text" placeholder="Поиск..." />
          
          { searchValue !== '' && <img onClick={clearSearchInput} className="cu-p" src="img/cross.svg" alt="Clear" /> }
        </div>
      </div>

      <CardContainer>
        { !isLoading &&
          items
          .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map(item => (
            <Card
              id={item.id}
              key={item.id}
              title={item.title}
              price={item.price}
              imgSrc={item.imgSrc}
              isLoading={false}

              removeFromFavorite={() => onRemoveFromFavorite(getIdOfItemInFavorites(item.id))}
              addToFavorite={() => onAddToFavorite(item)}
              addToCart={() => onAddToCart(item)}
              removeFromCart={() => onRemoveFromCart(getIdOfItemInCart(item.id))}
            />
          ))
        }

        {
          isLoading &&
          [...Array(8)].map((item, index) => (
            <Card
              id={index}
              key={index}
              title={""}
              price={0}
              imgSrc={""}
              isLoading={true}
    
              removeFromFavorite={() => {}}
              addToFavorite={() => {}}
              addToCart={() => {}}
              removeFromCart={() => {}}
            />
          ))
        }
      </CardContainer>
    </section>
  );
};


Home.propTypes = {
  searchValue: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  
  onChangeSearchInput: PropTypes.func.isRequired, 
  clearSearchInput: PropTypes.func.isRequired,
  
  onAddToFavorite: PropTypes.func.isRequired,
  onRemoveFromFavorite: PropTypes.func.isRequired,
 
  onAddToCart: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired
};


export default Home;
