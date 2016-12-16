import React from 'react';

const CalendarDetails = (props) => {
    const parseDate = string => {
        let parsedDate = string.match(/(\d{2})\-(\d)\-(\d{4})/);
        if (!parsedDate) return {};
        return {
            month: parsedDate[1],
            day: parsedDate[2],
            year: parsedDate[3]
        }
    } 
    console.log(parseDate(props.params.dateString));
    return (
        <div>
            details goes here
        </div>
    );
};

export default CalendarDetails;
