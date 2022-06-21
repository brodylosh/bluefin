import React from 'react';
import { useNavigate } from 'react-router';

function Header() {
  let navigate = useNavigate();
  return (
    <header>
      <h1 className="Title" onClick={() => navigate('../')}>
        BlueFin
        <span className="logo" role="img">
          🐟
        </span>
      </h1>
    </header>
  );
}

export default Header;
