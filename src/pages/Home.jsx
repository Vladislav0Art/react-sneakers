import React from 'react';
import PropTypes from 'prop-types';
// components
import Card from '../components/Card';
import CardContainer from '../components/CardContainer';

const Home = ({ 
  items, 
  searchValue, 
  onChangeSearchInput, 
  clearSearchInput,
  onAddToFavorite,
  onAddToCart
}) => {
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
                addCard={() => onAddToCart(item)}
              />
          ))
          }
      </CardContainer>
    </section>
  );
};


Home.propTypes = {
  items: PropTypes.array.isRequired, 
  searchValue: PropTypes.string.isRequired, 
  onChangeSearchInput: PropTypes.func.isRequired, 
  clearSearchInput: PropTypes.func.isRequired,
  onAddToFavorite: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired
};


export default Home;
