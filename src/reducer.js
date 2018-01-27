import { combineReducers } from 'redux';

import numPad from './comps/numPad.reducer';

export default function getRootReducer(navReducer) {
  return combineReducers({
    nav: navReducer,
    numPad
  });
}
