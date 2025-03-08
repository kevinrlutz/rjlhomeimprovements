import React, { Component } from 'react'
import './ProjectsContainer.css'
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

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
    const importAll = (r) => {
      let importImages = {};
      r.keys().map((item, index) => { importImages[item.replace('./', '')] = r(item); });
      return importImages;
    };
    
    const galleryImages = importAll(require.context('../../images/projects', false, /\.(png|jpe?g|svg)$/));

    let images = []

    Object.keys(galleryImages).map((imageName, index) => (
      images.push({
        original: galleryImages[imageName],
        thumbnail: galleryImages[imageName],
      })
    ))

    return (
      <div className="projects-container">
        <div className="centered">
          <p className='left-align-mobile side-margins'>
            Find some photos from our previously completed projects down below!
          </p>
          <ImageGallery items={images.reverse()} autoPlay={true} />
        </div>
        <br />
      </div>
    )
  }
}
