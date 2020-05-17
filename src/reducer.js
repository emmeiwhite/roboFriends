import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILURE
} from './constants';

/** --- THE APPLICATION STATE --- */
const initialState = {
  searchField: ''
};

/** --- Synchronous Action handled by the searchRobots reducer --- */
export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, { searchField: action.payload })
    default:
      return state;
  }
};

/** --- Now Creating the reducer function to handle our Asynchronous call --- */

export const requestRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, { isPending: false });
    case REQUEST_ROBOTS_FAILURE:
      return Object.assign({}, state, { isPending: false });
    default:
      return state;
  }
};