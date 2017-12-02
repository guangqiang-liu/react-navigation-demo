/**
 * Created by guangqiang on 2017/12/1.
 */
import {combineReducers} from 'redux'
import navigator from './Navigator'
import home from './Home'

const rootReducers = combineReducers({
  navigator,
  home
})

export default rootReducers