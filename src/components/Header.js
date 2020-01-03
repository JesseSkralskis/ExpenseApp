import React from 'react';
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import {startLogout} from '../actions/auth'





const Header = ({startLogout}) => (
  //navlink allows gives us props that help us style easily the
  //nav we are on using activeclassname and the styling is-active
  <header>
    <h1>Expensify</h1>
    <NavLink exact={true} activeClassName="is-active" to="/">
      Login
    </NavLink>
    <NavLink activeClassName="is-active" to="/create">
      create
    </NavLink>

    <NavLink activeClassName="is-active" to= "/dashboard" > Dash Board </NavLink>
     <button onClick={startLogout}>Logout</button>
    
  </header>
);

const mapDipatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined,mapDipatchToProps)(Header)