import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

const rootReducer = combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});

export default rootReducer;