/**
 * Created by guangqiang on 2017/12/2.
 */
import { actionType } from '../../Constants/actionType'

const initialState = {
  counterValue: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.INCREASE:
      return {
        ...state,
        counterValue: state.counterValue + 1
      }
      break
    case actionType.DECREASE:
      return {
        ...state,
        counterValue: state.counterValue - 1
      }
      break
    default:
      return state
  }
}