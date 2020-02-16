import React, { Component } from 'react';
import AddForm from '../Components/AddForm';
import uuid from 'uuid';
export default class Add extends Component {
  state = {
    staffData: JSON.parse(localStorage.getItem('staff')),
    history: JSON.parse(localStorage.getItem('history')),
    id: '',
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    company: '',
    department: 'Front End',
    joinDate: '',
    image: ''
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const date = new Date().toLocaleDateString('en-GB');
    const staffId = uuid();
    const newStaff = {
      id: staffId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      gender: this.state.gender,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      company: this.state.company,
      department: this.state.department,
      joinDate: date,
      dob: '10/11/1995',
      image:
        'https://media1.giphy.com/media/s3r36PoyBkn2U/giphy.gif?cid=790b76118ddefaeef392e7cefbedcfce7aa72fb5be5555fd&rid=giphy.gif'
    };
    var newStaffList = [...this.state.staffData, newStaff];
    this.setState({
      id: '',
      firstName: '',
      lastName: '',
      gender: '',
      email: '',
      phone: '',
      address: '',
      company: '',
      department: 'Front End',
      joinDate: date,
      image: ''
    });

    localStorage.setItem('staff', JSON.stringify(newStaffList));

    // Create history list for current added staff with empty history list
    const newObject = {
      id: staffId,
      history: []
    };
    var updateHistory = [...this.state.history, newObject];
    localStorage.setItem('history', JSON.stringify(updateHistory));

    return this.props.history.push('/staff');
  };
  render() {
    return (
      <div className='container mt-5 mx-auto'>
        <div className='row font-weight-bold'>
          <h6> Staff -> Add</h6>
        </div>
        <AddForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          phone={this.state.phone}
          department={this.state.department}
          company={this.state.company}
          address={this.state.address}
        />
      </div>
    );
  }
}
