import React, { Component } from 'react';
import _ from 'lodash';

/* components */
import CalendarDays from './days';

let monthNameMap = (month) => {
    const MONTH_NAMES = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    return MONTH_NAMES[month - 1];
}

const dateUtil = {
    currentDate: new Date(),
    currentDay () {
        return this.currentDate.getDate();
    },
    currentMonth () {
        return this.currentDate.getMonth() + 1;
    } ,
    currentYear () {
        return this.currentDate.getFullYear();
    },
    daysInMonth (month, year){
        if(!!! month || !!! year) return "";
        return new Date(year, month, 0).getDate();
    },
    isCurrentDay (day) {
        return  day == this.currentDay();
    },
    daysToSkip (d = this.currentDay(), m = this.currentMonth(), yyyy = this.currentYear()) {
        let firstDayInWeekdays = (year, month, day) => (new Date(year, month - 1, day)).getDay();
        return Array(
            firstDayInWeekdays(yyyy, m, d)
        ).fill(" ");
    }
}

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
        return dateUtil.daysToSkip()            
                .concat(dayRange)
                .map(day => this.renderDayBlock(day));
    }

    renderWeekdays() {
        const WEEK_DAYS = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ];
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
