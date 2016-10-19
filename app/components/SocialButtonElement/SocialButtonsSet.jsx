import React from 'react';
import { GithubButton } from './SocialButton';
import { GitHubIcon, FacebookIcon, TwitterIcon } from 'rebel-icons';

export default function SocialButtonsSet() {
  return (
    <div className="layout horizontal center-justified wrap mb-80 mt-40">
      <GithubButton />
    </div>
  );
}
