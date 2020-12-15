import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Budget App</h1>
    <nav>
      <ul>
        <NavLink to="/" activeClassName="is-active" exact >Home</NavLink>
        <NavLink to="/create" activeClassName="is-active" >Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active" >Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active" >Help</NavLink>
      </ul>
    </nav>
  </header>
);

export default Header;
