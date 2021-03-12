// IMPORTS

import React from 'react';
import '../../styles/components/main/photo_review/photo_review.css';
import { photosArray } from './../../index';


// COMPONENT

class PhotoReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      src: this.props.src,
      alt: this.props.alt,
      title: this.props.title,
      width: this.props.style.width,
      height: this.props.style.height
    };

    this.handleNextPhoto = this.handleNextPhoto.bind(this);
    this.handlePreviousPhoto = this.handlePreviousPhoto.bind(this);
    this.handleArrows = this.handleArrows.bind(this);
  }

  reviewButtonsTransition() {
    const buttons = [document.querySelector('.photo-review__previous'), document.querySelector('.photo-review__next')];
    buttons.forEach(element => {
  
      element.addEventListener("mouseover", () => {
        element.children[0].style.backgroundColor = "#FFFFFF";
        element.children[1].style.backgroundColor = "#FFFFFF";
      });
  
      element.addEventListener("mouseout", () => {
        element.children[0].style.backgroundColor = "#828282";
        element.children[1].style.backgroundColor = "#828282";
      });
    });
  }

  exitIconTransformer(isReviewOpened) {
    const exitIcon = document.querySelector('.photo-review__exit');
    const exitIconBars = exitIcon.children;
  
    if (isReviewOpened) {
      exitIconBars[0].style.cssText = `
        width: 100%;
        top: 50%;
        transform: rotate(-45deg);
        background: #828282`;
  
      exitIconBars[1].style.cssText = `
        opacity: 0`;
  
      exitIconBars[2].style.cssText = `
        width: 100%;
        top: 50%;
        transform: rotate(45deg);
        background: #828282`;
    }

    else {
      exitIconBars[0].style.cssText = `
        width: 100%;
        transform: rotate(0deg);
        background: #FFFFFF`;
  
      exitIconBars[1].style.cssText = `
        opacity: 1`;
  
      exitIconBars[2].style.cssText = `
        width: 25%;
        transform: rotate(0deg);
        background: #FFFFFF`;
    }
  }
  
  handleNextPhoto() {
    if (this.state.id + 1 === photosArray.length) {
      this.setState({
        id: 0,
        src: photosArray[0].src,
        title: photosArray[0].title,
        alt: photosArray[0].alt,
        width: photosArray[0].width,
        height: photosArray[0].height
      });
    }

    else {
      this.setState({
        id: this.state.id + 1,
        src: photosArray[this.state.id + 1].src,
        title: photosArray[this.state.id + 1].title,
        alt: photosArray[this.state.id + 1].alt,
        width: photosArray[this.state.id + 1].width,
        height: photosArray[this.state.id + 1].height
      });
    }
  }

  handlePreviousPhoto() {
    if ((this.state.id) === 0) {
      this.setState({
        id: photosArray.length - 1,
        src: photosArray[photosArray.length - 1].src,
        title: photosArray[photosArray.length - 1].title,
        alt: photosArray[photosArray.length - 1].alt,
        width: photosArray[photosArray.length - 1].width,
        height: photosArray[photosArray.length - 1].height
      });
    }

    else {
      this.setState({
        id: this.state.id - 1,
        src: photosArray[this.state.id - 1].src,
        title: photosArray[this.state.id - 1].title,
        alt: photosArray[this.state.id - 1].alt,
        width: photosArray[this.state.id - 1].width,
        height: photosArray[this.state.id - 1].height
      });
    }
  }

  animatePhotoChange() {
    const photoReviewChildren = document.querySelector(".photo-review").children;
    
    /*  
      0 - previous
      1 - photo
      2 - title
      3 - next
      4 - exit 
    */

    if (photoReviewChildren[1].classList.contains("photo-review__picture--animate")) {
      photoReviewChildren[1].style.opacity = "0";
      photoReviewChildren[2].style.opacity = "0";
      photoReviewChildren[1].classList.remove("photo-review__picture--animate");
      photoReviewChildren[2].classList.remove("photo-review__title--animate");
    }

    setTimeout(() => { 
      photoReviewChildren[1].classList.add("photo-review__picture--animate");
      photoReviewChildren[2].classList.add("photo-review__title--animate");
    }, 100);
  }

  handleArrows(e) {
    if (e.key === "ArrowRight") {
      this.handleNextPhoto();
    }
    if (e.key === "ArrowLeft") {
      this.handlePreviousPhoto();
    }
  }

  componentDidMount() {
    this.reviewButtonsTransition();
    this.animatePhotoChange();
    
    setTimeout(() => {this.exitIconTransformer(true)}, 50);
  }

  componentDidUpdate() {
    this.animatePhotoChange();
  }

  render() {
    document.addEventListener("keydown", e => this.handleArrows(e));
    return (
      <div className="photo-review">
        <button className="photo-review__previous" onClick={this.handlePreviousPhoto}>
          <span className="photo-review__previous__top-bar"></span>
          <span className="photo-review__previous__bottom-bar"></span>
        </button>

        <img 
          className="photo-review__picture" 
          src={this.state.src}
          alt={this.state.alt}
          id={this.state.id}>
        </img>

        <h3 
          className="photo-review__title" >
          {this.state.title ? this.state.title : ""}
        </h3>

        <button className="photo-review__next" onClick={this.handleNextPhoto}>
          <span className="photo-review__next__top-bar"></span>
          <span className="photo-review__next__bottom-bar"></span>
        </button>

        <button className="photo-review__exit" onClick={this.props.onClosed}>
          <span className="photo-review__exit__top-bar"></span>
          <span className="photo-review__exit__middle-bar"></span>
          <span className="photo-review__exit__bottom-bar"></span>
        </button>

      </div>
      
    );
  }
}


// EXPORTING COMPONENT

export default PhotoReview;