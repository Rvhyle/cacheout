import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './navbar_styles.scss';

const Navbar: React.FC = () => {
  return (
    <nav className='navbar mx-auto navbar-expand-lg'>
      <div className='container-fluid'>
        <a className='navbar-brand fw-bold' href='/'>
          CacheOut
        </a>
        {/* toggler */}
        <button
          className='navbar-toggler'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <MenuIcon />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mx-auto'>
            <li className='nav-item px-md-4'>
              <a href='/'>Men</a>
            </li>
            <li className='nav-item px-md-4'>
              <a href='/'>Women</a>
            </li>
            <li className='nav-item px-md-4'>
              <a href='/'>Tech</a>
            </li>
            <li className='nav-item px-md-4'>
              <a href='/'>Jewelry</a>
            </li>
          </ul>
          <div className='cart d-flex justify-content-center'>
            <ShoppingCartIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
