import { Component, PropTypes, Children } from 'react'

export default class IconConfigurator extends Component {
  static childContextTypes = {
    reactIconBase: PropTypes.object
  };

  static propTypes = {
    children: PropTypes.element.isRequired
  };

  getChildContext() {
    return {
      reactIconBase: {
        color: 'grey',
        size: 64,
        style: {

        }
      }
    }
  }

  render() {
    return Children.only(this.props.children)
  }
}
