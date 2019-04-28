import { GET_NOTE } from '../actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_NOTES':
      return action.payload;
    default:
      return state;
  }
};
