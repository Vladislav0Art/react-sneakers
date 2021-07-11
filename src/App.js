// components 
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <section className="content p-40">
        <div className="mb-40 d-flex justify-between align-center">
          <h1 className="content__title">Все кросовки</h1>
          <div className="d-flex align-center content__search">
            <img className="mr-15" src="/img/search.svg" alt="Search icon" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="content__cards d-flex flex-wrap justify-between">

          <Card />

        </div>
      </section>
    </div>
  );
}

export default App;
