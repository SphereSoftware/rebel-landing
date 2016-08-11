import React from 'react'
import { connect } from 'react-redux'
import style from './style.css'
import { selectIcon } from '../../actions'
import * as icons from 'rebel-icons'

class Main extends React.Component {

  selecIcon(iconClass){
    let {dispatch} = this.props
    dispatch(selectIcon(iconClass))
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
