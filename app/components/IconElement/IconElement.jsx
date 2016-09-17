import React, { Component, PropTypes } from 'react';
import * as icons from 'rebel-icons';
import noop from 'lodash/noop';

export default class IconElement extends Component {
  static PropTypes = {
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func
  };

  static defaultProps = {
    onClick: noop
  };

  render() {
    const { icon, onClick } = this.props;

    return (
      <div className="m-20" onClick={ onClick }>
        { React.createElement(icons[icon]) }
      </div>
    )
  }
}
