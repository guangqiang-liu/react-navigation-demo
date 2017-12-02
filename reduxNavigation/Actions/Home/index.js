/**
 * Created by guangqiang on 2017/12/1.
 */
import {actionType} from '../../Constants/actionType'
const changeStateValue = val => ({
    type: actionType.CHANGE_HOME_STATEVALUE,
    val
  }
)

export {changeStateValue}