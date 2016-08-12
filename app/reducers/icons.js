import { handleActions } from 'redux-actions'
import * as icons from 'rebel-icons'
import _ from 'lodash'

const iconsInitialState = _.reduce(Object.keys(icons), (acc, key) => {
  let { title } =  icons[key]
  acc[key] = { key , title, selected: ('RubyIcon' == key)}
  return acc
}, {})

export default handleActions({
  'select icon' (state, action) {
    return _.reduce(Object.keys(icons), (acc, key) => {
      let { title } =  icons[key]
      acc[key] = { key , title, selected: (action.payload == key)}
      return acc
    }, {})
  },
}, iconsInitialState)
