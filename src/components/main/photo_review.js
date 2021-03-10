import React from 'react';
import '../../styles/components/main/photo_review/photo_review.css';
import Picture from './picture';
import { photosArray } from './main.js';

const srcEditor = (source) => {
  let newString = "";
  for (let i = 1; i < source.length; i++) {
    newString += source[i];
  }
  return newString;
}

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
    if (window.innerWidth < 480) {
      if (this.state.width > this.state.height) {
        this.setState({width: "100%", height: "50%"});
      }
      if (this.state.width === this.state.height) {
        this.setState({width: "100%", height: "100vw"});
        document.querySelector('.photo-review').style.alignItems = "flex-start"; 
      }
      else {
        this.setState({width: "100%", height: "100%"});
        document.querySelector('.photo-review').style.alignItems = "flex-start";
      }
    }
  }

  handleNextPhoto() {
    this.setState({
      id: this.state.id + 1,
      src: this.getPhotoSource(this.state.id + 1),
      title: photosArray[this.state.id + 1].title,
      alt: photosArray[this.state.id + 1].alt,
      width: photosArray[this.state.id + 1].width,
      height: photosArray[this.state.id + 1].height
    });
    this.calcPhotosSizes();
  }

  getPhotoSource(id) {
    return srcEditor(Object.values(photosArray[id].src)[0])
  }
  
  handlePreviousPhoto() {
    this.setState({
      id: this.state.id - 1,
      src: this.getPhotoSource(this.state.id - 1),
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
  
  animatePhotoChange() {
    const photo = document.querySelector(".photo-review__picture");
    const title = document.querySelector(".photo-review__title");
    
    if (photo.classList.contains("photo-review__picture--animated")) {
      photo.style.opacity = "0";
      title.style.opacity = "0";
      photo.classList.remove("photo-review__picture--animated");
      title.classList.remove("photo-review__title--animated");
    }

    setTimeout(() => { 
      photo.classList.add("photo-review__picture--animated");
      title.classList.add("photo-review__title--animated");
    }, 100);
  }

  componentDidMount() {
    reviewButtonsTransition();
    this.firstPhotoChecker();
    this.lastPhotoChecker();
    this.calcPhotosSizes();
    this.animatePhotoChange();
  }

  componentDidUpdate() {
    this.firstPhotoChecker();
    this.lastPhotoChecker();
    this.animatePhotoChange();
    
  }

  render() {
    return (
      <div className="photo-review">
        <button className="photo-review__previous" onClick={this.handlePreviousPhoto}>
          <span className="photo-review__previous__top-bar"></span>
          <span className="photo-review__previous__bottom-bar"></span>
        </button>

        <img 
          className="photo-review__picture" 
          src={this.getPhotoSource(this.state.id)}
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

        <a className="photo-review__exit" onClick={this.props.onClosed}>
          <span className="photo-review__exit__top-bar"></span>
          <span className="photo-review__exit__middle-bar"></span>
          <span className="photo-review__exit__bottom-bar"></span>
        </a>

      </div>
    );
  }
}
export default PhotoReview;