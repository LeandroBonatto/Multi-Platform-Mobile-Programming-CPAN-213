import { inputCountry, inputCity, inputState } from "../actions";
import { INPUT_COUNTRY, INPUT_CITY, INPUT_STATE } from "../actionsTypes";

const initialState = {
    weather: [
        { country: 'Country', city: 'City', state: 'state'},
    ],
};

export default function = function (state = initialState, action) {
  switch (action.type) {
    case INPUT_COUNTRY:
      return {
        ...state,
        weather: state.weather + inputCountry
      };
    case INPUT_CITY:
      return {
        ...state,
        weather: state.weather + inputCity
      };
    case INPUT_STATE:
      return {
        ...state,
        weather: state.weather + inputState
      };
    default:
      return state;
  }
};

  
