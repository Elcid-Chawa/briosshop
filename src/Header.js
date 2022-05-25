import { Search, ShoppingBasket } from '@mui/icons-material';
import React from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='header'>
      <img
        className='header__logo' 
        src={require('./logo.png')}
        alt="logo"
        />

        <div className='header__search'>
            <input className='header__searchInput' type='text' />
            <Search className='header__searchIcon' />
        </div>

        <div className='header__nav'>

            <div className='header__option'>
                <span className='header__optionLineOne'>Hello Guest</span>
                <span className='header__optionLineTwo'>Sign In</span>
            </div>

            <div className='header__option'>
                <span className='header__optionLineOne'>Retuns</span>
                <span className='header__optionLineTwo'>& Orders</span>
            </div>

            <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
            </div>

            <NavLink to="/checkout">
                <div className='header__optionBasket'>
                    <ShoppingBasket />
                    <span className='header__optionLineTwo header__backetCount'>
                        {basket?.length}
                    </span>
                </div>
            </NavLink>
            
        </div>
    </div>
  );
}

export default Header;
