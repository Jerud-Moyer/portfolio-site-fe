import {
  getFacts,
  deleteFact,
  getFactById,
  postFact,
  updateFact
} from '../services/portfolio-api';

export const SET_FACTS = 'SET_FACTS';
export const setFacts = facts => ({
  type: SET_FACTS,
  payload: facts
});

export const SET_FACT = 'SET_FACT';
export const setFact = fact => ({
  type: SET_FACT,
  payload: fact
});

export const SET_LOADING = 'SET_LOADING';
export const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading
});

export const APPEND_FACT = 'APPEND_FACT';
export const appendFact = fact => ({
  type: APPEND_FACT,
  payload: fact
});

export const DELETE_FACT = 'DELETE_FACT';


export const fetchFacts = () => dispatch => {
  dispatch(setLoading(true))
  getFacts()
    .then(facts => {
      console.log(facts)
      dispatch(setFacts(facts));
    })
    .finally(() => dispatch(setLoading(false)));
};

export const fetchFact = id => dispatch => {
  getFactById(id)
    .then(fact => {
      dispatch(setFact(fact));
    })
    .finally(() => dispatch(setLoading(false)));
}; 

export const removeFact = id => dispatch => {
  deleteFact(id)
    .then(fact => {
      dispatch({
        type: DELETE_FACT,
        payload: fact.id
      });
    });

};

export const createFact = fact => dispatch => {
  postFact(fact)
    .then(createdFact => {
      dispatch(appendFact(createdFact));
    })
    .finally(() => dispatch(setLoading(false)));
};

export const changeFact = (id, fact) => dispatch => {
  updateFact(id, fact)
    .then(updatedFact => {
      dispatch(appendFact(updatedFact));
    })
    .finally(() => dispatch(setLoading(false)));
};
