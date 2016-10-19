import React, { Component, PropTypes } from 'react';
import styles from './styles.css';

export const GithubButton = (props) => {
    return (
      <iframe
        src="https://ghbtns.com/github-btn.html?user=SphereSoftware&repo=rebel-icons&type=star&count=true&size=large"
        frameBorder="0"
        scrolling="0"
        width="90px"
        height="30px"
      />
    )
}

export default class SocialButton extends Component {
  static PropTypes = {
    icon: PropTypes.node,
    label: PropTypes.string,
    count: PropTypes.number,
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const { icon, label, count, className } = this.props;
    return (
      <div className={ `${className} layout horizontal center` }>
        <a href="#" className={ `${styles.button} layout horizontal center mr-10` }>
          <div className={ `${styles.icon} layout horizontal center-center mr-5` }>{ icon }</div>
          <div className="flex text-center text-12">{ label }</div>
        </a>
        <a href="#" className={ `${styles.count} layout horizontal center-center text-12` }>
          { count }
        </a>
      </div>
    );
  }
}
