import { combineReducers } from 'redux';

import SettingsReducer from './settings_reducer';
import MoviesReducer from './movies_reducer';
import BooksReducer from './books_reducer';
import LibraryReducer from './library_reducer';

export default RootReducer = combineReducers({
  settings: SettingsReducer,
  movies: MoviesReducer,
  books: BooksReducer,
  library: LibraryReducer
});