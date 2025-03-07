import React, { Component } from 'react'
import './ProjectsContainer.css'

export default class ProjectsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMore: false,
      showMoreButtonText: '▼'
    }
    this.toggleShowMore = this.toggleShowMore.bind(this)
  }

  toggleShowMore() {
    if (this.state.showMore) {
        this.setState(({
            showMore: false,
            showMoreButtonText: '▼'
        }))
    } else {
        this.setState(({
            showMore: true,
            showMoreButtonText: '▲'
        }))
    }
  }

  render() {
    return (
      <div className="projects-container">
        <div className="centered">
          <p className='left-align-mobile side-margins'>
            Find some photos from our previously completed projects down below!
          </p>
        </div>
        <br />
      </div>
    )
  }
}
