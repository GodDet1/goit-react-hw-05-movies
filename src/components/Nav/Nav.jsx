import React from 'react';
import { NavigateLink, NavBar } from './styled.module';

function Nav() {
  return (
    <NavBar>
      <div className="container">
        <NavigateLink to="/">Home</NavigateLink>
        <NavigateLink to="/movies">Movies</NavigateLink>
      </div>
    </NavBar>
  );
}

export default Nav;
