import React, { Component } from 'react';

export default class EventRow extends Component {
  render() {
    const { staffId, event, handleRemoveEvent } = this.props;
    return (
      <div>
        <div className='card my-1'>
          <div className='card-header font-weight-bold'>
            {event.date}
            <span className='close-btn'>
              <i
                className='fas fa-window-close'
                onClick={() => handleRemoveEvent(staffId, event.id)}
              ></i>
            </span>
          </div>
          <div className='card-body'>{event.content}</div>
        </div>
      </div>
    );
  }
}
