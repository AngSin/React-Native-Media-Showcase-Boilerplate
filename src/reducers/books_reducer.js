import { BOOKS } from '../static/entries';
import { BUY_BOOK } from '../actions/books_actions';
const initialState = [...BOOKS]

export default function(state = initialState, action) {
  let newState = [...state];
  switch(action.type) {
    case BUY_BOOK: {
      newState[action.payload].available = true;
      return newState;
    }
    default:
      return newState;
  }
}