import React from 'react'
import { connect } from 'react-redux'
import { selectIcon } from '../../actions'
import * as icons from 'rebel-icons'

class IconElement extends React.Component {
  render() {
    let { iconName, dispatch } = this.props

    return (
      <li onClick={ e => dispatch(selectIcon(iconName)) }>
        {React.createElement(icons[iconName])}
      </li>
    )
  }
}

export default connect()(IconElement);
