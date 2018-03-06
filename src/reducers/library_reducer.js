import { BUY_BOOK } from '../actions/books_actions';
import { BUY_VIDEO } from '../actions/movies_actions';
//This reducer was added but not used in the app. You can use it to create a "Library" feature. Was not needed in my situation.
export default function(state = [], action) {
  let newState = [...state];
  switch(action.type) {
    case BUY_BOOK: {
      if (newState.indexOf({ type: 'book', index: action.payload }) > -1)
        console.log('already bought book');
      else
        newState.push({ type: 'book', index: action.payload });
      return newState;
    }
    case BUY_VIDEO: {
      if (newState.indexOf({ type: 'movie', index: action.payload }) > -1)
        console.log('already bought video');
      else
        newState.push({ type: 'movie', index: action.payload });
      return newState;
    }
    default:
      return newState;
  }
}