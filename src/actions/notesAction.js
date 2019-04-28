import { GET_NOTES } from '../actionTypes';
import { database } from '../firebase';

export const getNotes = () => {
  return dispatch => {
    database.on('value', snapshot => {
      dispatch({
        type: GET_NOTES,
        payload: snapshot.val(),
      });
    });
  };
};

export const saveNote = note => {
  return dispatch => {
    database.push(note);
  };
};

export const deleteNote = id => {
  return dispatch => {
    database.child(id).remove();
  };
};
