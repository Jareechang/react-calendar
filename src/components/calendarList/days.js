import React, { Component } from 'react';

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

export default class CalendarListDay extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const numberOfDaysThisMonth = dateUtil.daysInMonth(
            dateUtil.currentMonth(),
            dateUtil.currentYear()
        );
        return (
            <div>
                {dateUtil.daysInMonth()}
                current month: { numberOfDaysThisMonth }
            </div>
        )
    }
}
