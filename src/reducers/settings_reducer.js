import { SET_VISIBILITY, TOGGLE_ARABIC } from '../actions/settings_actions';

export default function(state = {}, action) {
  let newState = {...state};
  switch(action.type) {
    case SET_VISIBILITY: {
      newState.visibility = action.payload;
      return newState;
    }
    case TOGGLE_ARABIC: {
      newState.isArabic = !newState.isArabic;
      // console.log(newState.isArabic);
      return newState;
    }
    default:
      return newState;
  } 
}