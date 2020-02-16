import React, { Component } from 'react';

export default class EditForm extends Component {
  render() {
    const {
      staffNeedEdit,
      handleChange,
      handleSubmit,
      firstName,
      lastName,
      email,
      gender,
      phone,
      company,
      department,
      address
    } = this.props;
    return (
      <div className='row'>
        <div className='col-9'>
          <form onSubmit={handleSubmit}>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>ID: </label>
              <div className='col-sm-10'>
                <input
                  readOnly
                  className='form-control'
                  value={staffNeedEdit.id}
                  name='id'
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>First Name: </label>
              <div className='col-sm-10'>
                <input
                  className='form-control'
                  value={firstName}
                  name='firstName'
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Last Name: </label>
              <div className='col-sm-10'>
                <input
                  className='form-control'
                  value={lastName}
                  name='lastName'
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Gender: </label>
              <div className='col-sm-2 my-auto ml-3'>
                <input
                  type='radio'
                  className='form-check-input'
                  value='male'
                  name='gender'
                  checked={gender === 'male'}
                  onChange={handleChange}
                />
                <label className='form-check-label'>Male</label>
              </div>
              <div className='col-sm-2 my-auto'>
                <input
                  type='radio'
                  className='form-check-input'
                  value='female'
                  name='gender'
                  checked={gender === 'female'}
                  onChange={handleChange}
                />
                <label className='form-check-label'>Female</label>
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Email: </label>
              <div className='col-sm-10'>
                <input
                  className='form-control'
                  value={email}
                  name='email'
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Phone: </label>
              <div className='col-sm-10'>
                <input
                  className='form-control'
                  value={phone}
                  name='phone'
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Address: </label>
              <div className='col-sm-10'>
                <input
                  className='form-control'
                  name='address'
                  value={address}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Company: </label>
              <div className='col-sm-10'>
                <input
                  className='form-control'
                  name='company'
                  value={company}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Department: </label>
              <div className='col-sm-10'>
                <select
                  value={department}
                  onChange={handleChange}
                  name='department'
                  className='mt-2'
                >
                  <option value='Font End'>Front End</option>
                  <option value='QC'>QC</option>
                  <option value='Java'>Java</option>
                  <option value='Mobile'>Mobile</option>
                </select>
              </div>
            </div>
            <button className='btn mx-auto d-block'>Update</button>
          </form>
        </div>
        <div className='col-3'>
          <img
            src={staffNeedEdit.image}
            alt='avatar'
            style={{ maxHeight: '30rem' }}
          />
        </div>
      </div>
    );
  }
}
