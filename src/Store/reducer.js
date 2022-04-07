const initialState = {
    counter: 0,
    setInter: 1,
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, counter: state.counter + state.setInter};
        case 'DECREMENT':
            return {...state, counter: state.counter - state.setInter}
        case 'SET_INTERVAL':
            return {...state, setInter: action.payload}
        case 'RESET':
            return {...state, counter: 0}
        default:
            return state;
        }
}


export default reducer;
