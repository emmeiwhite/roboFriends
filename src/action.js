// Action Creators. Simple ES6 functions that returns an object to be given to the reducer
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILURE
} from './constants';

// SearchField Synchronous Action 
export const setSearchField = (text) => ({
  type: CHANGE_SEARCHFIELD,
  payload: text
});

// Request Robots(::) An Asynchronous Action, with three possibilities at the hand
// To be used by redux thunk. A Higher Order Function 
// Here we are returning the function for thunk to use ...

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((result) => result.json())
    .then((data) => { dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }) })
    .catch(error => { dispatch({ type: REQUEST_ROBOTS_FAILURE, payload: error }) })
};

