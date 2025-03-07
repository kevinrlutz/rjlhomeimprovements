import React, { Component } from 'react'
import './NavLink.css'

export default class NavLink extends Component {

  render() {
    return (
      <a href={this.props.linkRef} className={"nav-link"}>{this.props.linkTitle}</a>
    )
  }
}

