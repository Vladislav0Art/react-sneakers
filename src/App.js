import React from 'react';
// components 
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [isCartOpened, setIsCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://60ec0862e9647b0017cde002.mockapi.io/items')
    .then(res => res.json())
    .then(data => setItems(data))
    .catch(err => console.error(err));
  }, []);


  const onAddToCart = (item) => {
    setCartItems(prevState => ([
      ...prevState,
      item
    ]));
  };

  const onRemoveFromCart = (id) => {
    setCartItems(prevState => prevState.filter(stateItem => stateItem.id !== id));
  };


  return (
    <div className="wrapper clear">
      { isCartOpened && <Drawer cartItems={cartItems} onClose={() => setIsCartOpened(false)} /> }
      <Header onClickCart={() => setIsCartOpened(true)} />

      <section className="content p-40">
        <div className="mb-40 d-flex justify-between align-center">
          <h1 className="content__title">Все кросовки</h1>
          <div className="d-flex align-center content__search">
            <img className="mr-15" src="/img/search.svg" alt="Search icon" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="content__cards d-flex flex-wrap justify-between">

          {
            items.map(item => (
              <Card
                key={item.id}
                title={item.title}
                price={item.price}
                imgSrc={item.imgSrc}
                addCardToFavorite={() => console.log('added to favorite')}
                removeCardFromFavorite={() => console.log('added to favorite')}
                addCard={() => onAddToCart(item)}
                removeCard={() => onRemoveFromCart(item.id)}
              />
            ))
          }

        </div>
      </section>
    </div>
  );
}

export default App;
