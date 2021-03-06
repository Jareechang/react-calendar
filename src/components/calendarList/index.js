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
        const month = dateUtil.currentMonth();
        const year = dateUtil.currentYear();

        /* Event registrations */
        props.event.subscribe('INCREMENT_DATE', data => this.updateState(data));
        props.event.subscribe('DECREMENT_DATE', data => this.updateState(data));

        this.state = {
            month: month,
            year: year,
            numberOfDaysThisMonth: dateUtil.daysInMonth(
                month,
                year
            )
        }
        this.renderDayBlock = this.renderDayBlock.bind(this);
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

        return (
            <CalendarDays 
                additionalClass="day-block"
                currentDay={dateUtil.isCurrentDay(day)}
                key={day + Math.random()} 
                year={this.state.year}
                month={this.state.month}
                day={day} 
            />
        );
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
            <div className="calendar-view">
                <div className="title-section">
                    <p className="month-name">{monthNameMap(this.state.month) + ' ' + this.state.year}</p>
                </div>
                <div>{this.renderWeekdays()}</div>
                <div className="day-blocks">
                    {this.renderCalendarDayBlocks(this.state.numberOfDaysThisMonth)}
                </div>
            </div>
        );
    }
};
