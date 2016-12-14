import React, { Component } from 'react';

/* components */
import CalendarDays from './days';

const dateUtil = {
    currentDate: new Date(),
    currentMonth() {
        return this.currentDate.getMonth() + 1;
    },
    currentYear() {
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
        let dayBlocks = [];
        for (var num = 1; num <= days; num++) {
            dayBlocks.push(num)
        }
        return dayBlocks.map(day => <CalendarDays key={day} day={day} />)
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
