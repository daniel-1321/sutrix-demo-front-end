import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StaffRow from './StaffRow';

export default class StaffList extends Component {
  render() {
    const { staffData, handleDelete } = this.props;
    return (
      <div className='container-fluid mt-3 mx-auto w-75'>
        <div className='row justify-content-between font-weight-bold'>
          <div>Staff -> Result</div>
          <button className='btn'>
            <Link to='/staff/addnew' className='btn'>
              Add New
            </Link>
          </button>
        </div>
        <div className='row mt-2'>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Company</th>
                <th>Department</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {staffData.map(staff => {
                return (
                  <StaffRow
                    key={staff.id}
                    staff={staff}
                    handleDelete={() => handleDelete(staff.id)}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
