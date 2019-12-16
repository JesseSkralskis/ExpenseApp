import React from 'react';
import {NavLink,} from 'react-router-dom'






const Header = () => (
  //navlink allows gives us props that help us style easily the
  //nav we are on using activeclassname and the styling is-active
  <header>
    <h1>Expensify</h1>
    <NavLink exact={true} activeClassName="is-active" to="/">
      Home
    </NavLink>
    <NavLink activeClassName="is-active" to="/create">
      create
    </NavLink>
     
    
  </header>
);

export default Header;