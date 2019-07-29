import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
  <header>
    <img src="/assets/images/logo.svg" />
    <h1>Web By Birdwell</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
  </header>
);

export default Header;
