import React from 'react';
import SocialButton from './SocialButton';
import { GitHubIcon, FacebookIcon, TwitterIcon } from 'rebel-icons';

export default function SocialButtonsSet() {
  return (
    <div className="layout horizontal center-justified wrap mb-80 mt-40">
      <SocialButton
        icon={ <GitHubIcon size="16" color="#000" /> }
        label="Star"
        count={ 1000 }
        className="mr-20 ml-20 mt-10 mb-10"
      />
      <SocialButton
        icon={ <FacebookIcon size="16" /> }
        label="Share"
        count={ 1000 }
        className="mr-20 ml-20 mt-10 mb-10"
      />
      <SocialButton
        icon={ <TwitterIcon size="16" color="#2496d9" /> }
        label="Tweet"
        count={ 1000 }
        className="mr-20 ml-20 mt-10 mb-10"
      />
    </div>
  );
}
