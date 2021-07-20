import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// contexts
import AppContext from '../../contexts/AppContext';



const Header = ({ currentSum, countOfLikedItems, onClickCart }) => {
  const { theme, setTheme } = React.useContext(AppContext);

  return (
    <header className={`d-flex align-center justify-between p-40 header ${theme}`}>

      <Link to="/react-sneakers/">
        <div className="d-flex align-center header__left">
          <img className="mr-15" width={40} height={40} src="img/logo.svg" alt="Logo" />
          <div className="header__info">
            <h3 className="text-uppercase header__name">React sneakers</h3>
            <p className="opacity-5 header__subtext">Магазин лучших кроссовок</p>
          </div>      
        </div>
      </Link>

      <div className="clear d-flex header__right">

        <div onClick={onClickCart} className="mr-30 d-flex align-center cu-p">
          <img className="mr-10" width={20} height={20} src={theme === 'light' ? "img/cart.svg" : "img/cart-dark.svg"} alt="Cart" />
          <span className="header__price">{ currentSum } руб.</span>
        </div>

        {
          theme === 'light' ? 
            <img onClick={() => setTheme('dark')} width={20} height={20} className="cu-p mr-30" src="img/moon-dark.svg" alt="Dark mode" />
          :
            <img onClick={() => setTheme('light')} width={20} height={20} className="cu-p mr-30" src="img/sun-light.svg" alt="Light mode" />
        }

        <div className="mr-30 favorite-link">
          <Link className="cu-p" to="/react-sneakers/favorites">
            <span className="favorites-count">{ (countOfLikedItems > 0) && countOfLikedItems }</span>
            {
              (countOfLikedItems <= 0) ? 
                <img width={20} height={20} src={theme === 'light' ? "img/like.svg" : "img/like-dark.svg"} alt="Like" />
              :
                <img width={20} height={20} src={theme === 'light' ? "img/like-colored.svg" : "img/like-colored-dark.svg"} alt="Like colored" />
            }
          </Link>
        </div>

        <Link to="/react-sneakers/orders" className="cu-p">
          <div>
            <img width={20} height={20} src={theme === 'light' ? "img/user.svg" : "img/user-dark.svg"} alt="User" />
          </div>
        </Link>
      </div>
    </header>
  );
};

Header.propTypes = {
  currentSum: PropTypes.number.isRequired,
  countOfLikedItems: PropTypes.number.isRequired,
  onClickCart: PropTypes.func.isRequired
};

export default Header;
