import React from 'react'
import style from './style.css'
import { HelpIcon } from 'rebel-icons'

class Main extends React.Component {
  render() {

    let icons = [
      <HelpIcon />
    ]

    return (
      <main>
        <h3>Rebel Icons</h3>
        <ul>
        {icons.map((icon, i) => {
          return <li key={i} >{icon}</li>
        })}
        </ul>
      </main>
    );
  }
}

export default Main;
