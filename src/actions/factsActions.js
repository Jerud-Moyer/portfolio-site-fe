import { getFacts } from '../services/portfolio-api';

export const SET_FACTS = 'SET_FACTS';
export const setFacts = facts => ({
  type: SET_FACTS,
  payload: facts
});

export const SET_LOADING = 'SET_LOADING';
export const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading
});

export const fetchFacts = () => dispatch => {
  getFacts()
    .then(facts => {
      dispatch(setFacts(facts));
    })
    .finally(() => dispatch(setLoading(false)));
};
