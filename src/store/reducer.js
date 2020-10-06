import { GET_DATA_RESPONSE } from './actions';
import { combineReducers } from 'redux';
import { responsiveStateReducer } from 'redux-responsive';

const initialGeneralState = {
  data: {}
};

const generalReducer = (state = initialGeneralState, action) => {
  switch (action.type) {
    case GET_DATA_RESPONSE:
      return { ...initialGeneralState, data: action.response };

    default:
      return state;
  }
};

const reducers = combineReducers({
  generalReducer,
  browser: responsiveStateReducer
});

export default reducers;
