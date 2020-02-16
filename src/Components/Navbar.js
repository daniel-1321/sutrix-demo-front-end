import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-sm navbar-light bg-light'>
        <div className='collapse navbar-collapse show ml-sm-5 company-name'>
          <h1 className='text-uppercase ml-auto'>Staff Management</h1>
        </div>
        <div className='collapse navbar-collapse show ml-sm-5'>
          <ul className='navbar-nav ml-auto'>
            <li className='navbar-item'>
                <Link to='/' className='btn'>
                <i className="fas fa-sign-out-alt fa-2x"></i>
                </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
