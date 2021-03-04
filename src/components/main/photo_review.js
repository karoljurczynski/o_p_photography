import React from 'react';
import '../../styles/components/main/photo_review/photo_review.css';
import Picture from './picture';
import { photosArray } from './main.js';


const reviewButtonsTransition = () => {
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

class PhotoReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      src: this.props.style.background,
      title: this.props.title,
      width: this.props.style.width,
      height: this.props.style.height
    };

    this.handleNextPhoto = this.handleNextPhoto.bind(this);
    this.handlePreviousPhoto = this.handlePreviousPhoto.bind(this);
    this.calcPhotosSizes = this.calcPhotosSizes.bind(this);
  }


  calcPhotosSizes() {
    if (this.state.width > this.state.height)
      this.setState({width: "100%", height: "100%"});
    else if (this.state.width === this.state.height)
      this.setState({width: "70%", height: "70%"});
    else
      this.setState({width: "50%", height: "100%"});
  }

  handleNextPhoto() {
    this.setState({
      id: this.state.id + 1,
      src: photosArray[this.state.id + 1].src,
      title: photosArray[this.state.id + 1].title,
      alt: photosArray[this.state.id + 1].alt,
      width: photosArray[this.state.id + 1].width,
      height: photosArray[this.state.id + 1].height
    });
    this.calcPhotosSizes();
  }
  
  handlePreviousPhoto() {
    this.setState({
      id: this.state.id - 1,
      src: photosArray[this.state.id - 1].src,
      title: photosArray[this.state.id - 1].title,
      alt: photosArray[this.state.id - 1].alt,
      width: photosArray[this.state.id - 1].width,
      height: photosArray[this.state.id - 1].height
    });
    this.calcPhotosSizes();
  }

  firstPhotoChecker() {
    const previousButton = document.querySelector(".photo-review__previous");

    if (this.state.id == 0)
      previousButton.style.display = "none";
    else
      previousButton.style.display = "block";
  }

  lastPhotoChecker() {
    const nextButton = document.querySelector(".photo-review__next");

    if (this.state.id == photosArray.length-1)
      nextButton.style.display = "none";
    else
      nextButton.style.display = "block";
  }

  componentDidMount() {
    reviewButtonsTransition();
    this.firstPhotoChecker();
    this.lastPhotoChecker();
  }

  componentDidUpdate() {
    this.firstPhotoChecker();
    this.lastPhotoChecker();
  }

  render() {
    return (
      <div className="photo-review">
        <button className="photo-review__previous" onClick={this.handlePreviousPhoto}>
          <span className="photo-review__previous__top-bar"></span>
          <span className="photo-review__previous__bottom-bar"></span>
        </button>

        <div 
          className="photo-review__picture" 
          style={{width: this.state.width, height: this.state.height, background: this.state.src}}
          id={this.state.id}>
        </div>

        <h3 
          className="photo-review__title" >
          {this.state.title ? this.state.title : ""}
        </h3>

        <button className="photo-review__next" onClick={this.handleNextPhoto}>
          <span className="photo-review__next__top-bar"></span>
          <span className="photo-review__next__bottom-bar"></span>
        </button>

        <a 
          className="photo-review__back"
          onClick={this.props.onClosed}>BACK
        </a>

      </div>
    );
  }
}
export default PhotoReview;