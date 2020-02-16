import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StaffHistory from '../Components/StaffHistory';

export default class StaffDetail extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
      staffData: JSON.parse(localStorage.getItem('staff')),
      id
    };
  }
  render() {
    const staffInfo = this.state.staffData.find(
      staff => staff.id === this.state.id
    );
    return (
      <div className='container mt-2'>
        <div className='font-weight-bold'>
          <h6>Staff -> Detail</h6>
        </div>
        <button className='mb-2 btn mt-2'>
          <Link to='/staff' className='btn text-capitalize'>
            <i className='fas fa-step-backward mr-2'></i>Back
          </Link>
        </button>
        <div className='row section-info p-2'>
          <div className='col-2'>
            <p>First Name:</p>
            <p>Last Name:</p>
            <p>Gender:</p>
            <p>DoB:</p>
            <p>Address:</p>
            <p>ID:</p>
            <p>Mobile:</p>
            <p>Email:</p>
            <p>Join Date:</p>
            <p>Department:</p>
          </div>
          <div className='col-5'>
            <p>{staffInfo.firstName}</p>
            <p>{staffInfo.lastName}</p>
            <p>{staffInfo.gender}</p>
            <p>{staffInfo.dob}</p>
            <p>{staffInfo.address}</p>
            <p>{staffInfo.id}</p>
            <p>{staffInfo.email}</p>
            <p>{staffInfo.phone}</p>
            <p>{staffInfo.joinDate}</p>
            <p>{staffInfo.department}</p>
          </div>
          <div className='col-4'>
            <img
              src={staffInfo.image}
              alt='avatar'
              className='img-thumbnail'
              style={{ maxHeight: '30rem' }}
            />
          </div>
        </div>
        <div className='row section-history mt-5'>
          <h4 className='col-12'>History:</h4>
          <StaffHistory staffId={staffInfo.id} />
        </div>
      </div>
    );
  }
}
