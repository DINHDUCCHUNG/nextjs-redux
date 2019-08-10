import { combineReducers } from 'redux'
import ActivityOrder from './activityOrderReducer'
import Activity from './activityReducer'

const appStore = combineReducers({
  activityOrder: ActivityOrder,
  activity: Activity
})

export default appStore
