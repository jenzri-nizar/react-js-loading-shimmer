/**
 * @class Shimmer
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.css';
export default class Shimmer extends Component {
  static propTypes = {
    className: PropTypes.string,
    Sheight: PropTypes.string,
  }

  render() {
    const {
      className,
      Sheight
    } = this.props
    let class_name="loading-shimmer loading-shimmer-animation " +(className ? className:"");
    return (
        <span className={class_name}
              style={{height: Sheight ? Sheight : "16px"}}></span>
    )
  }
}
