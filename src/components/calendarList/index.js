import React, { Component } from 'react';
import _ from 'lodash';

/* Constants */
import { WEEK_DAYS } from '../../constants/date_constants';

/* Utility */
import { monthNameMap, dateUtil } from '../../utils/dateUtil';

/* Components */
import CalendarDays from './days';

export default class CalendarView extends Component {

    constructor (props) {
        super(props);

        /* Event registrations */
        props.event.subscribe('INCREMENT_DATE', data => this.updateState(data));
        props.event.subscribe('DECREMENT_DATE', data => this.updateState(data));

        this.renderDayBlock = this.renderDayBlock.bind(this);
        const month = dateUtil.currentMonth();
        const year = dateUtil.currentYear();
        this.state = {
            month: month,
            year: year,
            numberOfDaysThisMonth: dateUtil.daysInMonth(
                month,
                year
            )
        }
    }

    updateState(updatedDate) {
        let month = updatedDate.month() + 1;
        let year = updatedDate.year();

        this.setState({ 
            month: month,
            year: year,
            numberOfDaysThisMonth: dateUtil.daysInMonth(
                month,
                year 
            )
        });
    }

    renderDayBlock(day) {
        if (day === " ") {
            let EmptyCalendarDay = _ =>
                <div className="calendar-block" style={{border: '0px'}}></div>;
            return <EmptyCalendarDay key={Math.random()}/>;
        }

        return <CalendarDays 
            currentDay={dateUtil.isCurrentDay(day)}
            key={day + Math.random()} 
            year={this.state.year}
            day={day} 
        />;
    }

    renderCalendarDayBlocks(days) {
        let dayRange = _.range(1, days + 1);
        return dateUtil.daysToSkip({ m: this.state.month, yyyy: this.state.year })            
                .concat(dayRange)
                .map(day => this.renderDayBlock(day));
    }

    renderWeekdays() {
        return WEEK_DAYS.map(
            weekday => 
                <div key={weekday} className="week-day">
                    {weekday}
                </div>
        );
    }

    render () {
        return (
            <div className="text-center">
                <div className="title-section">
                    <p className="month-name">{monthNameMap(this.state.month) + ' ' + this.state.year}</p>
                </div>
                <div>{this.renderWeekdays()}</div>
                {this.renderCalendarDayBlocks(this.state.numberOfDaysThisMonth)}
            </div>
        );
    }
};
