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
        this.renderDayBlock = this.renderDayBlock.bind(this);
    }

    renderDayBlock(day, i) {

        if (day === " ") {
            let EmptyCalendarDay = _ =>
                <div className="calendar-block" style={{border: '0px'}}></div>;
            return <EmptyCalendarDay key={Math.random()}/>;
        }

        return <CalendarDays 
            currentDay={dateUtil.isCurrentDay(day)}
            key={day + Math.random()} 
            day={day} 
        />;
    }

    renderCalendarDayBlocks(days) {
        let dayRange = _.range(1, days + 1);
        return dateUtil.daysToSkip({ m: 4 })            
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
        const numberOfDaysThisMonth = dateUtil.daysInMonth(
            dateUtil.currentMonth(),
            dateUtil.currentYear()
        );

        return (
            <div className="text-center">
                <div className="title-section">
                    <p className="month-name">{monthNameMap(dateUtil.currentMonth())}</p>
                </div>
                <div>{this.renderWeekdays()}</div>
                {this.renderCalendarDayBlocks(numberOfDaysThisMonth)}
            </div>
        );
    }
};
