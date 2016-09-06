import React from 'react';
import { connect } from 'react-redux';
import { selectIcon } from '../../actions';
import * as icons from 'rebel-icons';

class IconElement extends React.Component {

  render() {
    let { icon: { key }, dispatch, color } = this.props

    return (
      <div className="mr-40" onClick={ e => dispatch(selectIcon(key)) }>
        {React.createElement(icons[key], {color})}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    color: state.color
  }
}

export default connect(mapStateToProps)(IconElement);
