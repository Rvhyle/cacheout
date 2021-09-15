import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './navbar_styles.scss';

const Navbar: React.FunctionComponent = (): JSX.Element => {
  return (
    <nav className='navbar mx-auto navbar-expand-lg'>
      <div className='container-fluid'>
        <Link className='link navbar-brand fw-bold' to='/'>
          Cache<span>Out</span>
        </Link>
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
              <Link to='/category/mens'>Mens</Link>
            </li>
            <li className='nav-item px-md-4'>
              <Link to='/category/womens'>Women's</Link>
            </li>
            <li className='nav-item px-md-4'>
              <Link to='/category/tech'>Tech</Link>
            </li>
            <li className='nav-item px-md-4'>
              <Link to='/category/jewelery'>Jewelery</Link>
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
