import React from 'react';

const EventItem = (props) => {
    return (
        <div className={`list-group-item ${props.class}`}>
            {props.eventName}
            <span className="event-type-appointment pull-right"></span>
        </div>
    );
}

const sampleList = ['Meeting at 9', 'Speak with Client', 'Plan company event'];

let renderItems = items => (
    items.map(item => 
        <EventItem 
            class="event-item"
            key={item} 
            eventName={item} 
        />
    )
)

const EventDisplay = props => (
    <div className="event-display list-group">
        {renderItems(sampleList)}
    </div>
);

export default EventDisplay;
