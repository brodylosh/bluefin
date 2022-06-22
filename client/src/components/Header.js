import React from 'react';
import { useNavigate } from 'react-router';

function Header() {
  let navigate = useNavigate();
  return (
    <h1 className="Title" onClick={() => navigate('../houses')}>
      BlueFin
      <span className="logo" role="img">
        🐟
      </span>
    </h1>
  );
}

export default Header;
