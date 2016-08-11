import React from 'react'
import style from './style.css'
import * as icons from 'rebel-icons'

class Main extends React.Component {
  render() {
    return (
      <main>
        <h3>Rebel Icons</h3>
        <ul>
          {Object.values(icons).map((iconClass, i) => {
            return <li key={i} >{React.createElement(iconClass)}</li>
          })}
        </ul>
      </main>
    );
  }
}

export default Main;
