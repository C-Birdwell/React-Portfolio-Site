import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
  <header>
    <div className="row">
    <div className="col-1">
    <img src="/assets/images/logo.svg" />
    <h1>Web By Birdwell</h1>
    </div>
    <div className="col-2">
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    </div>
    </div>
    
    
    
  </header>
);

export default Header;
