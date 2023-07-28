import { INPUT_COUNTRY, INPUT_CITY, INPUT_STATE } from 'redux';

export const inputCountry = (title) => {
    return {
      type: INPUT_COUNTRY,
      payload: title,
    };
  };
  
  export const inputCity = (title) => {
    return {
      type: INPUT_CITY,
      payload: title,
    };
  };
  
  export const inputState = (title) => {
    return {
      type: INPUT_STATE,
      payload: title,
    };
  };