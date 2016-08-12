import React from 'react'
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
          {Object.keys(icons).map((iconName) => {
            return <IconElement key={iconName} iconName={iconName} />
          })}
        </ul>
      </main>
    );
  }
}

function mapStateToProps(state){
  return {
    icons: state.icons.icons
  }
}

export default connect(mapStateToProps)(Main);
