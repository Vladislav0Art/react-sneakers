import React from 'react';
import PropTypes from 'prop-types';
// components
import Card from '../components/Card';
import CardContainer from '../components/CardContainer';

const Home = ({ 
  items,
  cartItems,
  favoriteItems,
  searchValue,
  isLoading, 
  onChangeSearchInput, 
  clearSearchInput,
  onAddToFavorite,
  removeFromFavorite,
  onAddToCart
}) => {

  const getIdOfItemInCart = (id) => {
    const item = favoriteItems.find(favItem => Number(favItem.itemId) === Number(id));
    return item.id;
  };



  // const renderItems = () => {
  //   if(!isLoading)
  //     return items
  //       .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
  //       .map(item => (
  //         <Card
  //           id={item.id}
  //           key={item.id}
  //           title={item.title}
  //           price={item.price}
  //           imgSrc={item.imgSrc}
  //           isLoading={false}

  //           isCardAdded={cartItems.some(cartItem => Number(cartItem.itemId) === Number(item.id))}
  //           isCardFavorite={favoriteItems.some(favoriteItem => Number(favoriteItem.itemId) === Number(item.id))}
  //           removeFromFavorite={() => removeFromFavorite(getIdOfItemInCart(item.id))}
  //           addCardToFavorite={() => onAddToFavorite(item)}
  //           addCard={() => onAddToCart(item)}
  //         />
  //       ));
  //   else
  //     return [...Array(8)].map((item, index) => (
  //       <Card
  //         id={null}
  //         key={index}
  //         title={""}
  //         price={0}
  //         imgSrc={""}
  //         isLoading={true}

  //         isCardAdded={false}
  //         isCardFavorite={false}
  //         removeFromFavorite={() => {}}
  //         addCardToFavorite={() => {}}
  //         addCard={() => {}}
  //       />
  //     ))
  // };


  return (
    <section className="content p-40">
      <div className="mb-40 d-flex justify-between align-center">
        <h1 className="content__title">{(searchValue === "") ? "Все кросовки" : `Поиск по запросу: "${searchValue}"`}</h1>
        <div className="d-flex align-center content__search">
          <img className="mr-15" src="/img/search.svg" alt="Search icon" />
          <input value={ searchValue } onChange={onChangeSearchInput} type="text" placeholder="Поиск..." />
          
          { searchValue !== '' && <img onClick={clearSearchInput} className="cu-p" src="/img/cross.svg" alt="Clear" /> }
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
  
              isCardAdded={cartItems.some(cartItem => Number(cartItem.itemId) === Number(item.id))}
              isCardFavorite={favoriteItems.some(favoriteItem => Number(favoriteItem.itemId) === Number(item.id))}
              removeFromFavorite={() => removeFromFavorite(getIdOfItemInCart(item.id))}
              addCardToFavorite={() => onAddToFavorite(item)}
              addCard={() => onAddToCart(item)}
            />
          ))
        }

        {
          isLoading &&
          [...Array(8)].map((item, index) => (
            <Card
              id={null}
              key={index}
              title={""}
              price={0}
              imgSrc={""}
              isLoading={true}
    
              isCardAdded={false}
              isCardFavorite={false}
              removeFromFavorite={() => {}}
              addCardToFavorite={() => {}}
              addCard={() => {}}
            />
          ))
        }
      </CardContainer>
    </section>
  );
};


Home.propTypes = {
  items: PropTypes.array.isRequired, 
  cartItems: PropTypes.array.isRequired,
  favoriteItems: PropTypes.array.isRequired,
  searchValue: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onChangeSearchInput: PropTypes.func.isRequired, 
  clearSearchInput: PropTypes.func.isRequired,
  onAddToFavorite: PropTypes.func.isRequired,
  removeFromFavorite: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired
};


export default Home;
