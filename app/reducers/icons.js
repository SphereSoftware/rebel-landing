import { handleActions } from 'redux-actions'
import * as icons from 'rebel-icons'
import _ from 'lodash'

const iconsObj = _.reduce(Object.keys(icons), (acc, key) => {
  acc[key] = key
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

  // 'add todo' (state, action) {
  //   return [{
  //     id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
  //     completed: false,
  //     text: action.payload
  //   }, ...state]
  // },
  //
  // 'delete todo' (state, action) {
  //   return state.filter(todo => todo.id !== action.payload )
  // },
  //
  // 'edit todo' (state, action) {
  //   return state.map(todo => {
  //     return todo.id === action.payload.id
  //       ? { ...todo, text: action.payload.text }
  //       : todo
  //   })
  // },
  //
  // 'complete todo' (state, action) {
  //   return state.map(todo => {
  //     return todo.id === action.payload
  //       ? { ...todo, completed: !todo.completed }
  //       : todo
  //   })
  // },
  //
  // 'complete all' (state, action) {
  //   const areAllMarked = state.every(todo => todo.completed)
  //   return state.map(todo => {
  //     return {
  //       ...todo,
  //       completed: !areAllMarked
  //     }
  //   })
  // },
  //
  // 'clear complete' (state, action) {
  //   return state.filter(todo => todo.completed === false)
  // }
}, initialState)
