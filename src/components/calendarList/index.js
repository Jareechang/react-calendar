import React, { Component } from 'react';
import _ from 'lodash';

/* components */
import CalendarDays from './days';
import NavigationSection from '../../components/navigation/index';

let monthNameMap = (month) => {
    const monthNames = [
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
    },
    isCurrentDay(day) {
        return  day == this.currentDay();
    }
}

export default class CalendarView extends Component {
    constructor (props) {
        super(props);
        this.renderDayBlock = this.renderDayBlock.bind(this);
    }

    renderDayBlock(day) {
        const EmptyCalendarDay = () => {
            return <div className="calendar-block" style={{border: '0px'}}></div>
        }
        if (day === " ") {
            return <EmptyCalendarDay key={Math.random()}/>;
        }
        return <CalendarDays 
            currentDay={dateUtil.isCurrentDay(day)}
            key={day + Math.random()} 
            day={day} 
        />;
    }

    renderCalendarDayBlocks(days) {
        let firstDayInWeekdays = (year, month, day) => {
            return (new Date(year, month - 1, day)).getDay();
        };
        let dayRange = _.range(1, days + 1);
        const skipsDays = Array(
            firstDayInWeekdays(
                dateUtil.currentYear(),
                dateUtil.currentMonth(),
                dateUtil.currentDay()
            )
        ).fill(" ");
        return skipsDays            
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
                <div 
                    key={weekday} 
                    className="week-day"
                >
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
            <div>
                <NavigationSection />
                <h3>{monthNameMap(dateUtil.currentMonth())} </h3>
                <div className="">
                    {this.renderWeekdays()}
                </div>
                {this.renderCalendarDayBlocks(numberOfDaysThisMonth)}
            </div>
        )
    }
}
