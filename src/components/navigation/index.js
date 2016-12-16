import React from 'react';

import DateTracker from '../../trackers/date_tracker';

const connect = (tracker, eventMiddleWare) => {
    return tracker(eventMiddleWare);
};

const NavigationSection = (props) => {
    /* Make connection between tracker and eventmiddleware */
    const dateTracker = connect(DateTracker, props.event);

    let next = _ => dateTracker.increment();
    let previous = _ => dateTracker.decrement();

    return (
        <div className="clearfix navigation-section">
            <p className="pull-right navigation-btn" onClick={next}>
                Next
                <span className="glyphicon glyphicon-chevron-right glyph-left-pad-10"></span>
            </p>
            <p className="pull-left navigation-btn" onClick={previous}>
                <span className="glyphicon glyphicon-chevron-left glyph-right-pad-10"></span>
                Previous
            </p>
        </div>
    )
};

export default NavigationSection;
