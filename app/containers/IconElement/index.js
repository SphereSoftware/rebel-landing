import React from 'react'
import { connect } from 'react-redux'
import { selectIcon } from '../../actions'
import * as icons from 'rebel-icons'

class IconElement extends React.Component {
  render() {
    let { icon: { key }, dispatch } = this.props

    return (
      <li onClick={ e => dispatch(selectIcon(key)) }>
        {React.createElement(icons[key])}
      </li>
    )
  }
}

export default connect()(IconElement);
