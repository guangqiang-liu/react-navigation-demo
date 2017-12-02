/**
 * Created by guangqiang on 2017/12/1.
 */
import {combineReducers} from 'redux'
import home from './home'
import home2 from './home2'
import counter from './counter'
const reducers = combineReducers({
  home,
  home2,
  counter
})

export default reducers