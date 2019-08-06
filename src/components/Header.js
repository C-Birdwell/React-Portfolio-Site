import React from 'react';
import { NavLink } from 'react-router-dom';

const renderName = () => (
  <h1>
    <span>Web By</span>
    <span>Birdwell</span>
  </h1>
)

const renderLogo = () => (
  <div className="row">
      <div className="col-1 center">
        <i className="icon-logo"></i>
      </div>
        <div className="col-4">
          {renderName()}
        </div>
      </div>
)

const Header = () => (
  <header>
    <div className="row">
    <div className="col-1">
        {renderLogo()}
    </div>
    <div className="col-2">
      <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    </div>
    </div>
    
    
    
  </header>
);

export default Header;
