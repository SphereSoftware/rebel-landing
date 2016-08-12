import { handleActions } from 'redux-actions'

export default handleActions({
  'set color' (state, action) {
    return action.payload
  }
}, 'red')
