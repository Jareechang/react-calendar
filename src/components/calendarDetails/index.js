import React from 'react';

const CalendarDetails = (props) => {
    const parseDate = string => {
        let matchedDate = string.match(/(\d{2})\-(\d)\-(\d{4})/);
        if (!matchedDate) return {};
        return {
            month: matchedDate[1],
            day: matchedDate[2],
            year: matchedDate[3]
        }
    } 
    return (
        <div>
            details goes here
        </div>
    );
};

export default CalendarDetails;
