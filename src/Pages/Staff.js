import React, { Component } from 'react';
// import { staffData } from '../Data/staffData';
import StaffList from '../Components/StaffList';
import Navbar from '../Components/Navbar';

export default class Staff extends Component {

  state = {
    staffData:JSON.parse(localStorage.getItem('staff')),
      
  };
  handleDelete = id => {
    const newStaffList = this.state.staffData.filter(staff => staff.id !== id);
    this.setState({
      staffData: newStaffList
    });
    localStorage.setItem('staff', JSON.stringify(newStaffList));
  };
  render() {
    return (
      <div>
        <Navbar/>
        <StaffList
          staffData={this.state.staffData}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
