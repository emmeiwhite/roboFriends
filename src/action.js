// Action Creator 
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILURE
} from './constants';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCHFIELD,
  payload: text
});

