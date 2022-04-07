const Up = () => {
    return {type: 'INCREMENT'};
}
const Down = () => {    
    return {type: 'DECREMENT'};
}
const Interval = (payload) => {
    return {type: 'SET_INTERVAL', payload};
}
const Reset = () => {
    return {type: 'RESET'};
}

export {Up, Down, Interval, Reset};
