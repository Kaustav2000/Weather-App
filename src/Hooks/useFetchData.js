import { useReducer, useEffect } from "react";
import { City } from "../API";
const ACTIONS = {
  MAKE_REQUEST: "MAKE_REQUEST",
  GET_DATA: "GET_DATA",
  ERROR: "ERROR",
};
const initialState = {
  weather: [],
  loading: true,
  error: false,
};
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.GET_DATA:
      return {
        ...state,
        weather: action.payload,
      };
      break;

    default:
      return state;
  }
}
export const useFetchData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (query) => {
    let val = await City(query);
    console.log(val);
    dispatch({
      type: "GET_DATA",
      payload: val.daily,
    });
  };

  return {
    state,
    fetchData,
  };
};
