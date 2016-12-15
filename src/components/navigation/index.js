import React from 'react';

const NavigationSection = (props) => {
    return (
        <div className="clearfix navigation-section">
            <p className="pull-right navigation-btn">
                Next
                <span className="glyphicon glyphicon-chevron-right glyph-left-pad-10"></span>
            </p>
            <p className="pull-left navigation-btn">
                <span className="glyphicon glyphicon-chevron-left glyph-right-pad-10"></span>
                Previous
            </p>
        </div>
    )
}

export default NavigationSection;
