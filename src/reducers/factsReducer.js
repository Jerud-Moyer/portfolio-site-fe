import {
  SET_FACTS,
  SET_LOADING
} from '../actions/factsActions';

const initialState = {
  loading: true,
  facts: [],
  
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
    default:
      return state;
  }
}
