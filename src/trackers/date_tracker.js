const DateTracker = (function(eventMiddleWare) {

    let _currentDate = new Date();

    let _eventMiddleWare = eventMiddleWare || {};

    function currentDate() {
        if (!_currentDate) return null;

        return _currentDate.toString();
    }

    function increment() {
        _currentDate.setMonth(_currentDate.getMonth() + 1);
        _eventMiddleWare.publish('INCREMENT_DATE');
    }

    function decrement() {
        _currentDate.setMonth(_currentDate.getMonth() - 1);
        _eventMiddleWare.publish('DECREMENT_DATE');
    }

    return {
        currentDate,
        increment,
        decrement
    }
})

export default DateTracker;
