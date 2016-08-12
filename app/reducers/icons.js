import { handleActions } from 'redux-actions'
import * as icons from 'rebel-icons'
import _ from 'lodash'

const iconsObj = _.reduce(Object.keys(icons), (acc, key) => {
  acc[key] = { key , selected: ('RubyIcon' == key) }
  return acc
}, {})

const initialState = {
  currentIcon: 'RubyIcon',
  icons: iconsObj,
  color: 'red',
  size: 32
}

export default handleActions({
  'select icon' (state, action) {
    return {
      ...state,
      currentIcon: action.payload
    }
  },

}, initialState)
