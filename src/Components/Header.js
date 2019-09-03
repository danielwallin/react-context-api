import React from 'react';
import './Header.scss';

const Header = props => {
  return (
    <header className={`header ${props.className}`}>
      <div className='header-top'>
        {props.left}
        <h2>{props.title}</h2>
        {props.right}
      </div>
      {props.children}
    </header>
  );
};

export default Header;
