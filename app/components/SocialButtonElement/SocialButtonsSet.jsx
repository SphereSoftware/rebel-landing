import React from 'react';

export const GithubButton = () =>
  <iframe
    src="https://ghbtns.com/github-btn.html?user=SphereSoftware&repo=rebel-icons&type=star&count=true&size=large"
    frameBorder="0"
    scrolling="0"
    width="140px"
    height="30px"
  />

export default function SocialButtonsSet() {
  return (
    <div className="layout horizontal center-justified wrap mb-80 mt-40">
      <GithubButton />
    </div>
  );
}
