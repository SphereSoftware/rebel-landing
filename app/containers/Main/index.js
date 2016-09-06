import React from 'react';
import { SketchPicker } from 'react-color';
import _ from 'lodash';
import { connect } from 'react-redux';

import { setColor } from '../../actions';
import IconElement from '../IconElement';

import { SocialButton } from '../SocialButtonElement';
import { RubyIcon } from 'rebel-icons';
import styles from './styles.css';

class Main extends React.Component {


  render() {
    const { icons, color, dispatch } = this.props
    console.log(icons)

    return (
      <main>
        <div className="layout horizontal center-justified mb-40 mt-40">
          <SocialButton
            icon={ <RubyIcon /> }
            label="Star"
            count={ 1000 }
            className="mr-40"
          />
          <SocialButton
            icon={ <RubyIcon /> }
            label="Share"
            count={ 1000 }
            className="mr-40"
          />
          <SocialButton
            icon={ <RubyIcon /> }
            label="Tweet"
            count={ 1000 }
          />
        </div>
        <div className="container">
          <SketchPicker
            color={ color }
            onChangeComplete={ newColor => dispatch(setColor(newColor)) }
          />

          <div className="layout horizontal center wrap">
            {_.map(icons, icon => <IconElement key={icon.title} icon={icon} />)}
          </div>
        </div>
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
