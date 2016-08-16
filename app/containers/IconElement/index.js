import React from 'react'
import { connect } from 'react-redux'
import { selectIcon } from '../../actions'
import * as icons from 'rebel-icons'

class IconElement extends React.Component {

  render() {
    let { icon: { key }, dispatch, color } = this.props

    return (
      <li onClick={ e => dispatch(selectIcon(key)) }>
        {React.createElement(icons[key], {color})}
      </li>
    )
  }
}

function mapStateToProps(state) {
  return {
    color: state.color
  }
}

export default connect(mapStateToProps)(IconElement);
