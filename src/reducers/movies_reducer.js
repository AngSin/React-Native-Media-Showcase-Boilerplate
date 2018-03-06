import { MOVIES } from '../static/entries';
import { BUY_VIDEO } from '../actions/movies_actions';
const initialState = [ ...MOVIES ];

export default function(state = initialState, action) {
  let newState = [ ...state ]
  switch (action.type) {
    case BUY_VIDEO: {
      // console.log(newState[action.payload]);
      newState[action.payload].available = true;
      console.log(newState);
      return newState;
    }
    default:
      return newState;
  } 
}