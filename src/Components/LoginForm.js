import React, { Component } from 'react';
import { accountData } from '../Data/accountData';
export default class LoginForm extends Component {
  state = {
    showAccount: false,
    accountData: accountData
  };

  render() {
    const { handleSubmit, handleChange, username, password } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-group row'>
            <label className='col-sm-2 col-form-label'> Username </label>
            <div className='col-sm-10'>
              <input
                placeholder='admin'
                type='text'
                className='form-control form-control-sm'
                name='username'
                value={username}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-2 col-form-label'> Password </label>
            <div className='col-sm-10'>
              <input
                placeholder='admin'
                type='password'
                className='form-control form-control-sm'
                name='password'
                value={password}
                onChange={handleChange}
              />
            </div>
          </div>
          <button className='mx-auto d-block btn'> Login </button>
        </form>
      </div>
    );
  }
}
