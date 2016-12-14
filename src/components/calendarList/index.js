import React, { Component } from 'react';
import _ from 'lodash';

/* components */
import CalendarDays from './days';

const monthNameMap = (month) => {
    months = [
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
    return monthNames[month - 1];
}

const dateUtil = {
    currentDate: new Date(),
    currentDay () {
        return this.currentDate.getDate();
    },
    currentMonth() {
        return this.currentDate.getMonth() + 1;
    } ,
    currentYear () {
        return this.currentDate.getFullYear();
    },
    daysInMonth: (month, year) => {
        if(!!! month || !!! year) return "";
        return new Date(year, month, 0).getDate()
    }
}

export default class CalendarView extends Component {
    constructor (props) {
        super(props);
    }

    renderCalendarDayBlocks(days) {
        let isCurrentDay = day => day == dateUtil.currentDay();
        return _.range(1, days + 1) 
            .map(day => 
                <CalendarDays 
                    currentDay={isCurrentDay(day)}
                    key={day} 
                    day={day} 
                /> 
            );
    }

    render () {
        const numberOfDaysThisMonth = dateUtil.daysInMonth(
            dateUtil.currentMonth(),
            dateUtil.currentYear()
        );
        return (
            <div>
                {this.renderCalendarDayBlocks(numberOfDaysThisMonth)}
            </div>
        )
    }
}
