/**
 * Created by guangqiang on 2017/12/2.
 */
import {actionType} from '../../Constants/actionType'

const increaseAction = value => ({
  type: actionType.INCREASE,
  val: value
})

const decreaseAction = value => ({
  type: actionType.DECREASE,
  val: value
})

export {increaseAction, decreaseAction}