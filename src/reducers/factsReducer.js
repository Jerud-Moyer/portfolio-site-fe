import {
  SET_FACTS,
  SET_FACT,
  SET_LOADING,
  APPEND_FACT
} from '../actions/factsActions';

const initialState = {
  loading: true,
  facts: [],
  fact: {}
  
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case SET_FACTS:
      return {
        ...state,
        facts: action.payload
      };
    case SET_FACT:
      return {
        ...state,
        fact: action.payload
      };
    case APPEND_FACT:
      return {
        ...state,
        facts: action.payload
      };
    default:
      return state;
  }
}
