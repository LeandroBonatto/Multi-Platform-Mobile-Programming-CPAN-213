import { COUNTER_DECREASE, COUNTER_INCREASE } from "../actionsTypes"; 

export const increase = value => ({
        type: COUNTER_INCREASE,
        payload: {
            increment: value
        }
});

export const decrease = value => ({
        type: COUNTER_DECREASE,
        payload: {
            decreament: value
        }
});