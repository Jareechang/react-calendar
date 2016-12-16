import { MONTH_NAMES } from '../constants/date_constants';

import moment from 'moment';

const monthNameMap = (month) => {
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
    /** 
     * @param Object - Date Object { d: Integer, m: Integer, yyyy: Integer } 
     * @return Array - An array of blanks strings to adjust to right weekday for that month
     *
     * @default Arguments - {d = 1, m = currentMonth, yyyy = currentYear} 
     * */
    daysToSkip ({ d = 1, m = this.currentMonth(), yyyy = this.currentYear() }) {
        let firstDayInWeekdays = (year, month, day) => {
            let daysToSkip = moment(`${yyyy}-${m}-${d}`).day();
            if (daysToSkip == 0) return daysToSkip;
            return daysToSkip - 1;
        };

        return Array(
            firstDayInWeekdays(yyyy, m, d)
        ).fill(" ");
    }
};

export {
    dateUtil,
    monthNameMap
}
