import { COUNTER_INCREASE, COUNTER_DECREASE } from "../actionsTypes";

const initialState = {
    value: 0
};

export default function(state = initialState, action) {
    switch (action.type) {
        case COUNTER_INCREASE: {
            const { increament } = action.payload;
            return {
                ...state,
                value: state.value + increment
            };
        }
        case COUNTER_DECREASE: {
            const { decreament } = action.payload;
            return {
                ...state,
                value: state.value - decreament
            };
        }
        default:
            return state;
    }
}