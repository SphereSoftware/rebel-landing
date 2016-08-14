import React from 'react'
import { SketchPicker } from 'react-color'
import _ from 'lodash'
import { connect } from 'react-redux'

import { setColor } from '../../actions'
import IconElement from '../IconElement'
import style from './style.css'

class Main extends React.Component {


  render() {
    const { icons, color, dispatch } = this.props

    return (
      <main>
        <h3>Rebel Icons</h3>
        <div>
          <SketchPicker
          color={ color }
          onChangeComplete={ newColor => dispatch(setColor(newColor)) }
          />
        </div>
        <ul>
          {_.map(icons, icon => <IconElement key={icon.title} icon={icon} />)}
        </ul>
      </main>
    );
  }
}

function mapStateToProps(state){
  return {
    icons: state.icons,
    color: state.color
  }
}

export default connect(mapStateToProps)(Main);
