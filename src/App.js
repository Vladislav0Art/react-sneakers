

function App() {
  return (
    <div className="wrapper clear">

      <div className="drawer">
        <div className="drawer__dimmer"></div>
        <div className="d-flex flex-column justify-between drawer__sidebar">

          <div>
            <div className="d-flex justify-between align-center mb-30 mt-30">
              <h2>Корзина</h2>
              <button className="d-flex justify-center align-center drawer__btn main-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0799 10.6155L9.6311 8.16673L12.0798 5.71801C13.0241 4.77376 11.5596 3.30934 10.6154 4.25359L8.16668 6.70231L5.71787 4.2535C4.77384 3.30947 3.30947 4.77384 4.2535 5.71787L6.70231 8.16668L4.25359 10.6154C3.30934 11.5596 4.77376 13.0241 5.71801 12.0798L8.16673 9.6311L10.6155 12.0799C11.5597 13.0241 13.0241 11.5597 12.0799 10.6155Z" fill="#B5B5B5"/>
                </svg>
              </button>
            </div>

            <div className="drawer__cards">
                
              <div className="d-flex justify-between align-center drawer__card">
                <img width={70} height={70} src="/img/sneakers/2.png" alt="Sneakers" />
                
                <div className="drawer__text">
                  <p>Мужские Кроссовки Nike Air Max 270</p>
                  <b>12 999 руб.</b>
                </div>

                <button className="d-flex justify-center align-center drawer__btn main-btn">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0799 10.6155L9.6311 8.16673L12.0798 5.71801C13.0241 4.77376 11.5596 3.30934 10.6154 4.25359L8.16668 6.70231L5.71787 4.2535C4.77384 3.30947 3.30947 4.77384 4.2535 5.71787L6.70231 8.16668L4.25359 10.6154C3.30934 11.5596 4.77376 13.0241 5.71801 12.0798L8.16673 9.6311L10.6155 12.0799C11.5597 13.0241 13.0241 11.5597 12.0799 10.6155Z" fill="#B5B5B5"/>
                  </svg>
                </button>
              </div>

            </div>
          </div>



          
          <ul className="drawer__order mb-30">
            <li className="mb-20 justify-between d-flex drawer__total">
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>

            <li className="mb-25 justify-between d-flex drawer__tax">
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>

            <li className="d-flex justify-center">
              <button className="drawer__actionBtn d-flex align-center justify-between action-btn">
                <span>Оформить заказ</span>
                <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </li>
          </ul>

        </div>
      </div>


      
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
        <div className="mb-40 d-flex justify-between align-center">
          <h1 className="content__title">Все кросовки</h1>
          <div className="d-flex align-center content__search">
            <img className="mr-15" src="/img/search.svg" alt="Search icon" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="content__cards d-flex flex-wrap justify-between">

          <div className="d-flex flex-column card">

            <div className="card__favorite">
              <img src="/img/heart-unliked.svg" alt="Heart-unliked" />
            </div>
            
            <img width={133} height={112} src="/img/sneakers/1.png" alt="Sneakers" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>

            <div className="d-flex justify-between align-center">

              <div className="d-flex flex-column">
                <span className="text-uppercase card__tag">Цена:</span>
                <b className="card__price">12 999 руб.</b>
              </div>

              <button className="d-flex justify-center align-center card__btn main-btn">
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

              <button className="d-flex justify-center align-center card__btn main-btn">
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

              <button className="d-flex justify-center align-center card__btn main-btn">
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

              <button className="d-flex justify-center align-center card__btn main-btn">
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

              <button className="d-flex justify-center align-center card__btn main-btn">
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
