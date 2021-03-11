import React from 'react';
import '../../styles/components/main/picture/picture.css';
import { photosArray } from './main';
import PhotoReview from './photo_review';


let scrollY = 0;

const exitIconTransformer = (isReviewOpened) => {
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
      top: 0;
      transform: rotate(0deg);
      background: #FFFFFF`;

    exitIconBars[1].style.cssText = `
      opacity: 1`;

    exitIconBars[2].style.cssText = `
      width: 25%;
      top: 20px;
      transform: rotate(0deg);
      background: #FFFFFF`;
  }
}

const bodyFreezer = (isReviewOpened = false) => {
  const body = document.querySelector("body");

  if (isReviewOpened) {
    scrollY = document.documentElement.scrollTop;

    // BODY FREEZING
    body.style.cssText = `
      top: ${-(document.documentElement.scrollTop)}px;
      position: fixed`;
  }
  else {
    // BODY POSITION CORRECTING
    body.style.cssText = `
      top: ${-(document.documentElement.scrollTop)}px;
      position: static`;

    window.scroll(0, scrollY);
  }
}

const menuIconDisplayChanger = (visible) => {
  if (visible)
    document.querySelector(".main__menu-icon").style.display = "block";
  else
    document.querySelector(".main__menu-icon").style.display = "none";
}

const srcEditor = (source) => {
  let newString = "";
  for (let i = 1; i < source.length; i++) {
    newString += source[i];
  }
  return newString;
}

class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReviewMounted: false
    };

    this.handleReviewMounting = this.handleReviewMounting.bind(this);
    this.handleReviewUnmounting = this.handleReviewUnmounting.bind(this);
    
    this.pictureStyle = {
      width: photosArray[this.props.data].width,
      height: photosArray[this.props.data].height,
    }
  }

  handleReviewMounting() {
    this.setState({isReviewMounted: true});
    document.querySelector("picture").style.pointerEvents = "none";
    menuIconDisplayChanger(false);
    bodyFreezer(true);
  }

  handleReviewUnmounting() {
    const container = document.querySelector(".photo-review");
    const photoReviewChildren = document.querySelector(".photo-review").children;

    /*  
      0 - previous
      1 - photo
      2 - title
      3 - next
      4 - exit 
    */
    if (photoReviewChildren[0].classList.contains("photo-review__previous--animate-exit")) {
      photoReviewChildren[0].classList.remove("photo-review__previous--animate-exit");
      photoReviewChildren[1].classList.remove("photo-review__picture--animate-exit");
      photoReviewChildren[2].classList.remove("photo-review__title--animate-exit");
      photoReviewChildren[3].classList.remove("photo-review__next--animate-exit");
    }
    else {
      photoReviewChildren[0].classList.add("photo-review__previous--animate-exit");
      photoReviewChildren[1].classList.add("photo-review__picture--animate-exit");
      photoReviewChildren[2].classList.add("photo-review__title--animate-exit");
      photoReviewChildren[3].classList.add("photo-review__next--animate-exit");

    }

    container.classList.contains("photo-review--animate-exit")
      ? container.classList.remove("photo-review--animate-exit")
      : container.classList.add("photo-review--animate-exit");
    exitIconTransformer(false);

    setTimeout(() => {
      this.setState({isReviewMounted: false});
      document.querySelector("picture").style.pointerEvents = "auto";
      menuIconDisplayChanger(true);
    }, 300);

    bodyFreezer(false);
  }
  
  render() {
    return (
      <>
        <picture 
          id={this.props.data} 
          className="picture"
          style={this.pictureStyle}
          onClick={this.handleReviewMounting}>
          <img src={photosArray[this.props.data].src} className="picture__img"/>
        </picture>
        {this.state.isReviewMounted
          ? <PhotoReview
              id={this.props.data}
              src={photosArray[this.props.data].src}
              alt={photosArray[this.props.data].alt}
              title={photosArray[this.props.data].title}
              style={this.pictureStyle}
              onClosed={this.handleReviewUnmounting} />
          : null}
      </>
    );
  }  
}
export default Picture;
