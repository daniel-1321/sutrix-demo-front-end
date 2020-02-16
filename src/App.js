import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { staffData } from './Data/staffData';
import { accountData } from './Data/accountData';
import { historyData } from './Data/historyData';
import Login from './Pages/Login';
import Staff from './Pages/Staff';
import StaffDetail from './Pages/StaffDetail';
import Edit from './Pages/Edit';
import Add from './Pages/Add';

export default class App extends Component {
  componentWillMount() {
    if (
      localStorage.getItem('accounts') === null ||
      JSON.parse(localStorage.getItem('accounts')).length === 0
    ) {
      localStorage.setItem('accounts', JSON.stringify(accountData));
    }
    if (
      localStorage.getItem('staff') === null ||
      JSON.parse(localStorage.getItem('staff')).length === 0
    ) {
      localStorage.setItem('staff', JSON.stringify(staffData));
    }
    if (
      localStorage.getItem('history') === null ||
      JSON.parse(localStorage.getItem('history')).length === 0
    ) {
      localStorage.setItem('history', JSON.stringify(historyData));
    }
  }
  render() {
    return (
      <div className='App'>
        <Router>
          <main>
            {/* <Navbar/> */}
            <Switch>
              <Route path='/' exact component={Login} />
              <Route path='/staff' exact component={Staff} />
              <Route path='/staff/detail/:id' component={StaffDetail} />
              <Route path='/staff/edit/:id' component={Edit} />
              <Route path='/staff/addnew' component={Add} />
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}
