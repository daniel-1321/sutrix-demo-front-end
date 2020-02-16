import React, { Component } from 'react';

export default class EventInput extends Component {
  render() {
    const { staffId, handleAddEvent, content, handleChange } = this.props;
    return (
      <div className='section-comment-input mt-3 text-center'>
        <textarea
          className='form-control rounded'
          placeholder='Add event'
          value={content}
          onChange={handleChange}
        />

        <button
          className='btn mt-2'
          onClick={() => handleAddEvent(staffId)}
          disabled={content ? false : true}
        >
          Add
        </button>
      </div>
    );
  }
}
