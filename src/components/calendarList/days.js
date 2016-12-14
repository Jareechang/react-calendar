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
                <p className="month-name"></p>
                <p className={`day-display ${addClassIfActive('current-day-display')}`}>
                    {this.props.day}
                 </p>
            </div>
        )
    }
}
