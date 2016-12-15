import React, { Component } from 'react';

export default class CalendarDays extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        let addClassIfActive = (name) => {
            return this.props.currentDay ? name : '';
        };
        return (
            <div className={`calendar-block ${addClassIfActive('current-day')}`}>
                <p className="today-text">
                    {this.props.currentDay ? 'Today' : ''}
                </p>
                <p className={`day-display ${addClassIfActive('current-day-display')}`}>
                    {this.props.day || " "}
                 </p>
                <div className="events">
                    <p className="events-title">20</p>
                    <p className="events-body text-right">events</p>
                </div>
            </div>
        )
    }
}
