import React, { Component } from 'react';
import EventRow from './EventRow';
import EventInput from './EventInput';

export default class StaffHistory extends Component {
  state = {
    history: JSON.parse(localStorage.getItem('history')),
    content: ''
  };

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleRemoveEvent = (staffId, eventId) => {
    //   Find an employee
    const employee = this.state.history.find(e => e.id === staffId);

    // Remove event of employee from history
    var newHistory = this.state.history.filter(e => e.id !== staffId);

    // Remove event of chosen employee from his history
    const newEventList = employee.history.filter(event => event.id !== eventId);

    // Init new object
    const newObject = {
      id: staffId,
      history: newEventList
    };

    newHistory = [...newHistory, newObject];
    this.setState({ history: newHistory });

    // Update to local storage
    localStorage.setItem('history', JSON.stringify(newHistory));
  };

  handleAddEvent = staffId => {
    const eventInput = this.state.content;

    //   Find an employee
    const employee = this.state.history.find(e => e.id === staffId);

    const date = new Date().toLocaleDateString('en-GB');
    const newEvent = {
      id: employee.history.length + 1,
      date: date,
      content: eventInput
    };

    employee.history = [...employee.history, newEvent];

    // Init new object
    const newObject = {
      id: staffId,
      history: employee.history
    };

    // Remove this employee from history list
    var newHistory = this.state.history.filter(e => e.id !== staffId);

    //Update again into history list
    newHistory = [...newHistory, newObject];

    this.setState({ history: newHistory, content: '' });

    // Update history to local storage
    localStorage.setItem('history', JSON.stringify(newHistory));
  };
  render() {
    const { staffId } = this.props;
    const events = this.state.history.find(e => e.id === staffId);

    return (
      <div className='col-12'>
        <div>
          {events.history.length < 1 ? (
            <p> No event </p>
          ) : (
            events.history.map(event => {
              return (
                <EventRow
                  staffId={staffId}
                  event={event}
                  key={event.id}
                  handleRemoveEvent={this.handleRemoveEvent}
                />
              );
            })
          )}
        </div>
        <div>
          <EventInput
            staffId={staffId}
            history={this.state.history}
            handleAddEvent={this.handleAddEvent}
            handleChange={this.handleChange}
            content={this.state.content}
          />
        </div>
      </div>
    );
  }
}
