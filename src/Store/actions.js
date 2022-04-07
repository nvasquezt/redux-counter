const Up = () => {
    return {type: 'INCREMENT'};
}
const Down = () => {    
    return {type: 'DECREMENT'};
}
const Interval = (payload) => {
    return {type: 'SET_INTERVAL', payload};
}


export {Up, Down, Interval};
