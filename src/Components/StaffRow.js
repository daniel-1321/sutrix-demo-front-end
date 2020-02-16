import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class StaffRow extends Component {
  render() {
    const { staff, handleDelete } = this.props;
    return (
      <tr>
        <td className='text-uppercase'>{staff.firstName + ' ' + staff.lastName}</td>
        <td className='text-right'>{staff.phone}</td>
        <td className='text-right text-capitalize'>{staff.gender}</td>
        <td className='text-right'>{staff.email}</td>
        <td className='text-right'>{staff.company}</td>
        <td className='text-right'>{staff.department}</td>
        <td className='text-center'>
          <span>
            <Link to={`/staff/detail/${staff.id}`} className='mx-2 text-info'>
              <i className='fas fa-eye'></i>
            </Link>
          </span>
          <span className='mx-2'>
            <Link to={`/staff/edit/${staff.id}`} className='mx-2 text-success'>
              <i className='fas fa-pen'></i>
            </Link>
          </span>
          <span className='mx-2 text-danger' onClick={handleDelete}>
            <i className='fas fa-trash'></i>
          </span>
        </td>
      </tr>
    );
  }
}
