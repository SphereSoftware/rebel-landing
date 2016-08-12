import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import icons from './icons'
import color from './color'

export default combineReducers({
  routing,
  icons,
  color
})
