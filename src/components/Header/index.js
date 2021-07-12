import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ currentSum, onClickCart }) => {
  return (
    <header className="d-flex align-center justify-between p-40 header">  
      <div className="d-flex align-center header__left">
        
        <img className="mr-15" width={40} height={40} src="/img/logo.svg" alt="Logo" />
        
        <div className="header__info">
          <h3 className="text-uppercase header__name">React sneakers</h3>
          <p className="opacity-5 header__subtext">Магазин лучших кроссовок</p>
        </div>
      
      </div>

      <ul className="clear d-flex header__right">
        <li onClick={onClickCart} className="mr-30 d-flex align-center cu-p">
          <img className="mr-10" width={20} height={20} src="/img/cart.svg" alt="Cart" />
          <span className="header__price">{ currentSum } руб.</span>
        </li>

        <li className="mr-30">
          <img width={20} height={20} src="/img/like.svg" alt="Like" />
        </li>

        <li>
          <img width={20} height={20} src="/img/user.svg" alt="User" />
        </li>
      </ul>
    </header>
  );
};

Header.propTypes = {
  currentSum: PropTypes.number.isRequired,
  onClickCart: PropTypes.func.isRequired
};

export default Header;
