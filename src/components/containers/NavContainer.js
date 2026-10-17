import React, { Component } from 'react'
import './NavContainer.css'
import NavLink from '../NavLink'
import { Menu, X } from 'lucide-react'

export default class NavContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showMobileNav: false
    }
    this.toggleMobileNav = this.toggleMobileNav.bind(this)
  }

  toggleMobileNav() {
    this.setState({ showMobileNav: !this.state.showMobileNav })
  }

  render() {
    return (
      <div className='nav-container'>
        <div className='desktop-nav-container'>
          <NavLink linkTitle="GALLERY" linkRef="#projects" />
          <NavLink linkTitle="TESTIMONIALS" linkRef="#testimonials" />
          <NavLink linkTitle="CONTACT" linkRef="#contact" />
        </div>
        <div className={this.state.showMobileNav ? 'mobile-nav-container centered' : 'hidden'}>
          <NavLink linkTitle="GALLERY" linkRef="#projects" />
          <NavLink linkTitle="TESTIMONIALS" linkRef="#testimonials"/>
          <NavLink linkTitle="CONTACT" linkRef="#contact" />
        </div>
        <button
          type='button'
          className='mobile-nav-arrow'
          onClick={this.toggleMobileNav}
          aria-label={this.state.showMobileNav ? 'Close menu' : 'Open menu'}
          aria-expanded={this.state.showMobileNav}
        >
          {this.state.showMobileNav ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    )
  }
}
