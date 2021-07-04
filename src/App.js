

function App() {
  return (
    <div className="wrapper">
      
      <header className="d-flex align-center justify-between p-40 header">
          
        <div className="d-flex align-center header__left">
          
          <img className="mr-15" width={40} height={40} src="/img/logo.svg" alt="Logo" />
          
          <div className="header__info">
            <h3 className="text-uppercase header__name">React sneakers</h3>
            <p className="opacity-5 header__subtext">Магазин лучших кроссовок</p>
          </div>
        
        </div>

        <ul className="clear d-flex header__right">
          <li className="mr-30 d-flex align-center">
            <img className="mr-10" width={20} height={20} src="/img/cart.svg" alt="Cart" />
            <span className="header__price">1200 руб.</span>
          </li>

          <li className="mr-30">
            <img width={20} height={20} src="/img/like.svg" alt="Like" />
          </li>

          <li>
            <img width={20} height={20} src="/img/user.svg" alt="User" />
          </li>
        </ul>

      </header>

      <section className="content p-40">
        <h1 className="content__title mb-40">Все кросовки</h1>

        <div className="content__cards d-flex flex-wrap justify-between">

          <div className="d-flex flex-column card">
            <img width={133} height={112} src="/img/sneakers/1.png" alt="Sneakers" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>

            <div className="d-flex justify-between align-center">

              <div className="d-flex flex-column">
                <span className="text-uppercase card__tag">Цена:</span>
                <b className="card__price">12 999 руб.</b>
              </div>

              <button className="d-flex justify-center align-center card__btn">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
                </svg>
              </button>

            </div>
          </div>

          <div className="d-flex flex-column card">
            <img width={133} height={112} src="/img/sneakers/1.png" alt="Sneakers" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>

            <div className="d-flex justify-between align-center">

              <div className="d-flex flex-column">
                <span className="text-uppercase card__tag">Цена:</span>
                <b className="card__price">12 999 руб.</b>
              </div>

              <button className="d-flex justify-center align-center card__btn">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
                </svg>
              </button>

            </div>
          </div>


          <div className="d-flex flex-column card">
            <img width={133} height={112} src="/img/sneakers/1.png" alt="Sneakers" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>

            <div className="d-flex justify-between align-center">

              <div className="d-flex flex-column">
                <span className="text-uppercase card__tag">Цена:</span>
                <b className="card__price">12 999 руб.</b>
              </div>

              <button className="d-flex justify-center align-center card__btn">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
                </svg>
              </button>

            </div>
          </div>


          <div className="d-flex flex-column card">
            <img width={133} height={112} src="/img/sneakers/1.png" alt="Sneakers" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>

            <div className="d-flex justify-between align-center">

              <div className="d-flex flex-column">
                <span className="text-uppercase card__tag">Цена:</span>
                <b className="card__price">12 999 руб.</b>
              </div>

              <button className="d-flex justify-center align-center card__btn">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
                </svg>
              </button>

            </div>
          </div>

          <div className="d-flex flex-column card">
            <img width={133} height={112} src="/img/sneakers/1.png" alt="Sneakers" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>

            <div className="d-flex justify-between align-center">

              <div className="d-flex flex-column">
                <span className="text-uppercase card__tag">Цена:</span>
                <b className="card__price">12 999 руб.</b>
              </div>

              <button className="d-flex justify-center align-center card__btn">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
                </svg>
              </button>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default App;
