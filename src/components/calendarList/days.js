import React, { Component } from 'react';

import { dateUtil } from '../../utils/dateUtil';

export default class CalendarDays extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        let isCurrentMonthAndYear = () => {
            return this.props.year == dateUtil.currentYear() &&
                this.props.month == dateUtil.currentMonth();
        };

        let addClassIfActive = (name) => {
            if (this.props.currentDay && isCurrentMonthAndYear()) {
                    return name;
            } 
            return '';
        };

        return (
            <div className={`calendar-block ${addClassIfActive('current-day')}`}>
                <p className="today-text">
                    {this.props.currentDay && isCurrentMonthAndYear() ? 'Today' : ''}
                </p>
                <p className={`day-display ${addClassIfActive('current-day-display')}`}>
                    {this.props.day || " "}
                 </p>
                <div className="events">
                    <p className="events-title">20</p>
                    <p className="events-body">events</p>
                </div>
            </div>
        );
    }
}
