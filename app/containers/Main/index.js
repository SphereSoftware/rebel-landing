import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

import IconElement from '../IconElement'
import style from './style.css'

class Main extends React.Component {

  render() {
    const { icons } = this.props

    return (
      <main>
        <h3>Rebel Icons</h3>
        <ul>
          {_.map(icons, icon => <IconElement key={icon.title} icon={icon} />)}
        </ul>
      </main>
    );
  }
}

function mapStateToProps(state){
  return {
    icons: state.icons
  }
}

export default connect(mapStateToProps)(Main);
