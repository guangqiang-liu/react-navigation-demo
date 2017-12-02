/**
 * Created by guangqiang on 2017/12/1.
 */
import { NavigationActions } from 'react-navigation'
import Navigator from '../../Configs/StackNavigator'

const initialState = Navigator.router.getStateForAction(NavigationActions.init())

export default (state = initialState, actions) => {
  const nextState = Navigator.router.getStateForAction(actions, state)
  return nextState || state
}