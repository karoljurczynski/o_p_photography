// IMPORTS

import React from 'react';
import '../../styles/components/main/picture/picture.css';
import PhotoReview from './photo_review';
import { contentArray } from './../../index';


// GLOBALS

let scrollY = 0;


// COMPONENT

class Picture extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isReviewMounted: false
    };

    this.handleReviewMounting = this.handleReviewMounting.bind(this);
    this.handleReviewUnmounting = this.handleReviewUnmounting.bind(this);
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
  
  bodyFreezer(isReviewOpened) {
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
  
  menuIconDisplayChanger(visible) {
    if (visible)
      document.querySelector(".main__menu-icon").style.display = "block";
    else
      document.querySelector(".main__menu-icon").style.display = "none";
  }

  handleReviewMounting() {
    this.setState({isReviewMounted: true});
    document.querySelector("picture").style.pointerEvents = "none";
    this.menuIconDisplayChanger(false);
    this.bodyFreezer(true);
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
    this.exitIconTransformer(false);

    setTimeout(() => {
      this.setState({isReviewMounted: false});
      document.querySelector("picture").style.pointerEvents = "auto";
      this.menuIconDisplayChanger(true);
    }, 400);

    this.bodyFreezer(false);
  }

  render() {
    return (
      <>
        <picture 
          id={"picture" + this.props.data} 
          className="picture"
          onClick={this.handleReviewMounting}>
          <img 
            src={ contentArray[this.props.type][this.props.data].src } 
            alt={ contentArray[this.props.type][this.props.data].alt } 
            className="picture__img" />
        </picture>

        {this.state.isReviewMounted
          ? <PhotoReview
              id={ this.props.data }
              type={ this.props.type }
              src={ contentArray[this.props.type][this.props.data].src }
              alt={ contentArray[this.props.type][this.props.data].alt }
              title={ contentArray[this.props.type][this.props.data].title }
              style={ this.pictureStyle }
              onClosed={ this.handleReviewUnmounting } />
          : null}
      </>
    );
  }  
}


// EXPORTING COMPONENT

export default Picture;