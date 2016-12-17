import React from 'react';

import EventDisplay from './eventDisplay';

const CalendarDetails = (props) => {
    const parseDate = string => {
        let matchedDate = string.match(/(\d{4})\-(\d{2})\-(\d)/);
        if (!matchedDate) return {};
        return {
            year: matchedDate[1],
            month: matchedDate[2],
            day: matchedDate[3]
        }
    } 
    return (
        <div>
            <div className="col-md-8">
                <EventDisplay />
            </div>
            <div className="col-md-4">
                panel
            </div>
        </div>
    );
};

export default CalendarDetails;
