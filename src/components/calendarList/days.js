import React, { Component } from 'react';

import { dateUtil } from '../../utils/dateUtil';

export default class CalendarDays extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        let addClassIfActive = (name) => {
            if (this.props.currentDay && 
                this.props.year == dateUtil.currentYear()) {
                    return name;
                } 
            return '';
        }

        let addClassForWeekend = (name) => this.props.isWeekend ? name : '';
        let appendAdditionalClass = () => {
            return addClassIfActive('current-day') + 
                addClassForWeekend('weekend');
        };
        return (
            <div className={`calendar-block ${appendAdditionalClass()}`}>
                <p className="today-text">
                    {this.props.currentDay ? 'Today' : ''}
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
