/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import createReducer from '../helpers/createReducer'
import * as types from '../actions/types'

export const activeScreen = createReducer({}, {
  [types.SET_SCREEN](state, action) {
    return action;
  }
});
