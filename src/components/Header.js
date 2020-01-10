import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {startLogout} from '../actions/auth'





const Header = ({ startLogout }) => (
  //navlink allows gives us props that help us style easily the
  //nav we are on using activeclassname and the styling is-active
  <header className="header">
    {/* <NavLink exact={true} activeClassName="is-active" to="/">
      Login
    </NavLink> */}
    {/* <NavLink activeClassName="is-active" to="/create">
      create
    </NavLink> */}
    <div className="content-container">
      
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          {" "}
          <h1>Expensify</h1>{" "}
        </Link>
        <button className="buttons buttons--link" onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDipatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined,mapDipatchToProps)(Header)