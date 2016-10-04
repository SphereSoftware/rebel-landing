import React, { Component, PropTypes } from 'react';
import * as icons from 'rebel-icons';
import noop from 'lodash/noop';

import styles from './styles.css';

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
      <div className={ `mt-20 mb-20 text-center ${styles.item}` } onClick={ onClick }>
        { React.createElement(icons[icon]) }
        <div className="mt-10 p-10 ellipsis">{ icons[icon].name }</div>
      </div>
    )
  }
}
