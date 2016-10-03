import React, { Component, PropTypes } from 'react';
import SocialButton from './SocialButton';
import { RubyIcon } from 'rebel-icons';

export default class SocialButtonsSet extends Component {
  render() {
    return (
      <div className="layout horizontal center-justified wrap mb-80 mt-40">
        <SocialButton
          icon={ <RubyIcon /> }
          label="Star"
          count={ 1000 }
          className="mr-20 ml-20 mt-10 mb-10"
        />
        <SocialButton
          icon={ <RubyIcon /> }
          label="Share"
          count={ 1000 }
          className="mr-20 ml-20 mt-10 mb-10"
        />
        <SocialButton
          icon={ <RubyIcon /> }
          label="Tweet"
          count={ 1000 }
          className="mr-20 ml-20 mt-10 mb-10"
        />
      </div>
    );
  }
}
