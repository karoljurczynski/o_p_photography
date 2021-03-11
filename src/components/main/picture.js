import React from 'react';
import '../../styles/components/main/picture/picture.css';
import { photosArray } from './main';
import PhotoReview from './photo_review';


let scrollY = 0;

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
      top: this.props.top,
      left: this.props.left,
      right: this.props.right,
      bottom: this.props.bottom,
      background: srcEditor(Object.values(photosArray[this.props.data].src)[0]),
      margin: this.props.margin
    }
  }

  handleReviewMounting() {
    this.setState({isReviewMounted: true});
    document.querySelector("picture").style.pointerEvents = "none";
    bodyFreezer(true);
  }

  handleReviewUnmounting() {
    const container = document.querySelector(".photo-review");
    container.classList.contains("photo-review--animate-exit")
      ? container.classList.remove("photo-review--animate-exit")
      : container.classList.add("photo-review--animate-exit");

    setTimeout(() => {
      this.setState({isReviewMounted: false});
      document.querySelector("picture").style.pointerEvents = "auto";
    }, 400);

    bodyFreezer(false);
  }
  
  render() {
    return (
      <>
        <picture 
          id={this.props.data} 
          className="picture" 
          title={photosArray[this.props.data].title}
          alt={photosArray[this.props.data].alt}
          style={this.pictureStyle}
          onClick={this.handleReviewMounting}>
          <img src={srcEditor(Object.values(photosArray[this.props.data].src)[0])} className="picture__img"/>
        </picture>
        {this.state.isReviewMounted
          ? <PhotoReview
              id={this.props.data}
              title={photosArray[this.props.data].title}
              style={this.pictureStyle}
              onClosed={this.handleReviewUnmounting} />
          : null}
      </>
    );
  }  
}
export default Picture;
