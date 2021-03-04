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
      isLastPhoto: false
    };

    this.handleNextPhoto = this.handleNextPhoto.bind(this);
    this.handlePreviousPhoto = this.handlePreviousPhoto.bind(this);

    this.pictureStyle = {
      width: this.props.style.width,
      height: "90%", //this.props.style.height
      backgroundColor: this.props.style.backgroundColor,
    }
  }
  handleNextPhoto() {



  }
  handlePreviousPhoto() {

    

  }

  firstPhotoChecker() {
    const previousButton = document.querySelector(".photo-review__previous");

    if(this.props.id == 0)
      previousButton.style.display = "none";
    else
      previousButton.style.display = "block";
  }

  lastPhotoChecker() {
    const nextButton = document.querySelector(".photo-review__next");

    if(this.props.id == photosArray.length-1)
      nextButton.style.display = "none";
    else
      nextButton.style.display = "block";
  }

  componentDidMount() {
    reviewButtonsTransition();
    console.log(photosArray);
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
          style={this.pictureStyle}
          id={this.props.id}>
        </div>

        <h3 
          className="photo-review__title" >
          {this.props.title ? this.props.title : ""}
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