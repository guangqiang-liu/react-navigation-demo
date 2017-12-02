/**
 * Created by guangqiang on 2017/12/2.
 */
import { actionType } from '../../Constants/actionType'

const initialState = {
  mainText: 'Start Here'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.SUBMIT_NEW_TEXT:
      return {
        ...state,
        mainText: action.text
      }
      break
    default:
      return state
  }
}