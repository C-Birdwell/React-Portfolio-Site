import { combineReducers } from 'redux'
import animations from '../reducers/Animations'
import layout from '../reducers/Layout'

export default combineReducers({
  animations: animations,
  layout: layout,
})
