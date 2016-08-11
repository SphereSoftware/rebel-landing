import React from 'react'
import { connect } from 'react-redux'
import * as icons from 'rebel-icons'

import style from './style.css'
import { selectIcon } from '../../actions'

class Main extends React.Component {

  selecIcon(iconName){
    let {dispatch} = this.props
    dispatch(selectIcon(iconName))
  }

  render() {
    return (
      <main>
      <h3>Rebel Icons</h3>
      <ul>
        {Object.keys(icons).map((iconName, i) => {
          return <li
          key={iconName}
          onClick={ e => ::this.selecIcon(iconName) }
          >
          {React.createElement(icons[iconName])}
          </li>
        })}
      </ul>
      </main>
    );
  }
}

export default connect()(Main);
