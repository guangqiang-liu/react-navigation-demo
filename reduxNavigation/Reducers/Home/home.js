/**
 * Created by guangqiang on 2017/12/2.
 */
import { actionType } from '../../Constants/actionType'

const initialState = {
  homeState: '这是reducer中初始的值'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.CHANGE_HOME_STATEVALUE:
      return {
        ...state,
        homeState: action.val
      }
      break
    default:
      return state
  }
}