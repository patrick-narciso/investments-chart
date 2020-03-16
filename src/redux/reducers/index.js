import { combineReducers } from 'redux';
import investments from '../modules/investments';

const reducer = combineReducers({
  investments,
});

export default reducer;
