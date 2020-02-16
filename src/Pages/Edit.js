import React, { Component } from 'react';
import EditForm from '../Components/EditForm';
import { Link } from 'react-router-dom';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    const staffNeedEdit = JSON.parse(localStorage.getItem('staff')).find(
      e => e.id === id
    );
    this.state = {
      staffData: JSON.parse(localStorage.getItem('staff')),
      staffNeedEdit,
      id,
      index:staffNeedEdit.index,
      firstName: staffNeedEdit.firstName,
      lastName: staffNeedEdit.lastName,
      phone: staffNeedEdit.phone,
      address: staffNeedEdit.address,
      gender: staffNeedEdit.gender,
      department: staffNeedEdit.department,
      email: staffNeedEdit.email,
      company: staffNeedEdit.company,
      dob: staffNeedEdit.dob,
      joinDate: staffNeedEdit.joinDate,
      image: staffNeedEdit.image
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  getStaffIndex = () => {
    const index = this.state.staffData.findIndex(staff => staff.id === this.state.id)
    return index
    
  }
  handleSubmit = e => {
    e.preventDefault();

    const editedStaff = {
        index:this.state.index,
        id: this.state.id,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phone: this.state.phone,
        address: this.state.address,
        gender: this.state.gender,
        department: this.state.department,
        email: this.state.email,
        company:this.state.company,
        dob: this.state.dob,
        joinDate: this.state.joinDate,
        image: this.state.image
      };

      this.state.staffData.splice(this.getStaffIndex(),1,editedStaff)
      localStorage.setItem('staff',JSON.stringify(this.state.staffData))
    return this.props.history.push('/staff')
  }
  render() {
    return (
      <div className='container mt-2'>
        <div className='font-weight-bold'>
          <h6> Staff -> Update</h6>
        </div>
        <button className='mb-2 btn'>
          <Link to='/staff' className='btn text-capitalize'>
            <i className='fas fa-step-backward mr-2'></i>Back
          </Link>
        </button>
        <EditForm
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          gender={this.state.gender}
          phone={this.state.phone}
          address={this.state.address}
          email={this.state.email}
          company={this.state.company}
          department={this.state.department}
          staffNeedEdit={this.state.staffNeedEdit}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
