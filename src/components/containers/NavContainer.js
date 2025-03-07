import React, { Component } from 'react'
import './NavContainer.css'
import NavLink from '../NavLink'

export default class NavContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      navArrow: '▼',
      showMobileNav: false
    }
    this.toggleMobileNav = this.toggleMobileNav.bind(this)
  }

  toggleMobileNav() {
    if (this.state.navArrow === '▼') {
      this.setState({
        navArrow: '▲',
        showMobileNav: true
      })
    } else {
      this.setState({
        navArrow: '▼',
        showMobileNav: false
      })
    }
  }

  render() {
    return (
      <div>
        <div className='desktop-nav-container'>
          <NavLink linkTitle="ABOUT" linkRef="#"/>&nbsp;
          <NavLink linkTitle="GALLERY" linkRef="#projects" />&nbsp;
          <NavLink linkTitle="CONTACT" linkRef="#contact" />
        </div>
        <div className={this.state.showMobileNav ? 'mobile-nav-container centered' : 'hidden'}>
          <NavLink linkTitle="ABOUT" linkRef="#"/><br />
          <NavLink linkTitle="GALLERY" linkRef="#projects" /><br />
          <NavLink linkTitle="CONTACT" linkRef="#contact" />
        </div>
        <div className='mobile-nav-arrow' onClick={this.toggleMobileNav}>{this.state.navArrow}</div>
      </div>
      
    )
  }
}
