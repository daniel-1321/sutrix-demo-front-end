import React, { Component } from 'react';

export default class AddForm extends Component {
  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      company,
      handleChange,
      handleSubmit,
      department
    } = this.props;
    return (
      <div className='row'>
        <div className='col-8'>
          <form onSubmit={handleSubmit}>
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
                  name='gender'
                  value='male'
                  onChange={handleChange}
                />
                <label className='form-check-label'>Male</label>
              </div>
              <div className='col-sm-2 my-auto'>
                <input
                  type='radio'
                  className='form-check-input'
                  name='gender'
                  value='female'
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
                  value={address}
                  name='address'
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Company: </label>
              <div className='col-sm-10'>
                <input
                  className='form-control'
                  value={company}
                  name='company'
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Department: </label>
              <div className='col-sm-10'>
                <select
                  onChange={handleChange}
                  name='department'
                  value={department}
                  className='mt-2'
                >
                  <option selected  value='Front End'>Front End</option>
                  <option  value='QC'>QC</option>
                  <option  value='Java'>Java</option>
                  <option  value='Mobile'>Mobile</option>
                </select>
              </div>
            </div>
            <button
              className='btn mx-auto d-block'
              disabled={
                firstName && lastName && email
                  ? false
                  : true
              }
            >
              Add
            </button>
          </form>
        </div>
        <div className='col-4'>
          <img
            src='https://media1.giphy.com/media/s3r36PoyBkn2U/giphy.gif?cid=790b76118ddefaeef392e7cefbedcfce7aa72fb5be5555fd&rid=giphy.gif'
            alt='avatar'
            className='img-thumbnail'
            // style={{ maxHeight: '100rem' }}
          />
        </div>
      </div>
    );
  }
}
