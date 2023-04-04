import { legacy_createStore as createStore, combineReducers } from 'redux';
import { dialogsReducer } from './dialogs-reducer';
import { postsReducer } from './posts-reducer';
import { usersReducer } from './users-reducer';

const reducers = combineReducers({
  profilePage: postsReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
})

let store = createStore(reducers);

export default store;