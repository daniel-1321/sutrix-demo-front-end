import React, { Component } from 'react';
// import { accountData } from '../Data/accountData';
import LoginForm from '../Components/LoginForm';

export default class Login extends Component {
  state = {
    accounts:JSON.parse(localStorage.getItem('accounts')),
    username: '',
    password: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const accountInput = {
      username: this.state.username,
      password: this.state.password
    };

    const result = this.state.accounts.find(
      account =>
        account.username === accountInput.username &&
        account.password === accountInput.password
    );
    if (result) {
      return this.props.history.push('/staff');
    } else {
      alert('Account is invalid');
    }
  };
  render() {
    return (
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-6'>
            <LoginForm
              username={this.state.username}
              password={this.state.password}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}
