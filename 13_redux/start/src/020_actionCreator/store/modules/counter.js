const initialState = 0;

const reducer = (state = initialState, { type, payload }) => {
    console.log(type);
    switch (type) {
        case "counter/+":
            return state + payload;
        case "counter/-":
            return state - payload;
        default:
            return state;
    }
};

// action creator
const add = (payload) => {
    return {
        type: "counter/+",
        payload
    }
}

const minus = (payload) => {
    return {
        type: "counter/-",
        payload
    }
}

export { reducer, add, minus }
