import React, { PropTypes, Component } from 'react';
import Icon from 'rebel-icons';
import RebelLib from 'rebel-icons/lib/rebel-lib';
import SocialButtonsSet from 'SocialButtonElement';
import chunk from 'lodash/chunk';
import CN from 'classnames';
import DebounceInput from 'react-debounce-input';
import Preview from 'Preview';
import styles from './styles.css';

const SIZES =[
  ['S', 20],
  ['M', 30],
  ['L', 50]
];

const ITEM_WIDTH = 115;
const PADDING = 15;
const BASE_URL = 'https://github.com/SphereSoftware/rebel-icons/';

export default class Grid extends Component {
  state = {
    perRow: 8,
    icon: null,
    currentRow: null,
    search: '',
    size: 30
  };

  get filteredIcons() {
    const reg = new RegExp(
      this.state.search.toLowerCase()
        .split('')
        .reduce((a, b) => `${a}[^${b}]*${b}`, '')
    );

    return Object.keys(RebelLib)
      .filter((item) => reg.test(item.toLowerCase())
    )
  }

  componentDidMount() {
    this.calculateLimit();
    window.addEventListener('resize', this.calculateLimit);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calculateLimit);
  }

  calculateLimit = () => {
    this.setState({ perRow: Math.floor((this.refs.container.offsetWidth - PADDING * 2) / ITEM_WIDTH) });
  };

  render() {
    const { icon, perRow, currentRow, size } = this.state;

    return (
      <main>
        <div className="container">
          <div className="text-center text-24">Simple and clean React SVG icon pack.</div>
          <SocialButtonsSet />
          <div className="layout horizontal center-justified wrap mb-80">
            <div className="mr-20 ml-20 mt-10 mb-10">
              <a href={ `${BASE_URL}#installation` } className={ `button blue-button ${styles.button}` }>Getting Started</a>
              <div className="text-center text-12 mt-5">Installation guide for developers</div>
            </div>
            <div className="mr-20 ml-20 mt-10 mb-10">
              <a href="#" className={ `button dark-blue-button ${styles.button}` }>Download</a>
              <div className="text-center text-12 mt-5">SVG, AI for designers</div>
            </div>
          </div>
        </div>
        <hr className="mb-80 mr-80 ml-80"/>
        <div ref="container" className="container">
          <div className={ `layout wrap end mb-20 ${styles.header}` }>
            <div className="flex layout horizontal center-center">
              { SIZES.map(([l, siz]) =>
                  <div
                    key={ l }
                    className={ CN('mr-10 layout horizontal center-center', styles.toggleSize, { [styles.active]: size === siz } ) }
                    onClick={ () => this.setState({ size: siz }) }
                  >
                    { l }
                  </div>
                )
              }
            </div>
            <div className="flex two text-center mr-20 ml-20">
              <div className="text-30 dark-blue-text mb-20">Regular Style</div>
              <div className="text-18">Copy and paste icon names to use with your code</div>
            </div>
            <div className="flex mt-20">
              <DebounceInput
                minLength={ 2 }
                debounceTimeout={ 200 }
                type="search"
                placeholder="Search"
                className={ styles.search }
                onChange={ e => this.setState({ search: e.target.value }) } />
            </div>
          </div>
          <hr className="dark"/>
          { chunk(this.filteredIcons, perRow).map((row, i) =>
              <div key={ i } className="layout horizontal center wrap justified">
                { row.map(icon =>
                    <div key={ icon } className={ `mt-20 mb-20 pointer text-center ${styles.item}` } onClick={ () => this.setState({ icon, currentRow: i }) }>
                      <Icon
                        icon={ icon }
                        size={ size }
                      />
                      <div className="mt-10 p-10 ellipsis">{ RebelLib[icon] }</div>
                    </div>
                  )
                }
                <Preview active={ currentRow === i } icon={ icon } />
              </div>
            )
          }
        </div>
      </main>
    );
  }
}

